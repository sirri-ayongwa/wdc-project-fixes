import axios from 'axios';

// Interface for the extraction response
export interface ExtractionResult {
  success: boolean;
  extractedData?: Record<string, string>;
  error?: string;
}

class GeminiService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey?: string) {
    // Try to get the API key from the parameter or from the environment
    this.apiKey = apiKey || import.meta.env.VITE_GEMINI_API_KEY || '';
    this.baseUrl = "https://generativelanguage.googleapis.com/v1beta/models";
    
    // Log for debugging (remove in production)
    console.log("API Key defined:", !!this.apiKey);
  }
  /**
   * Extract data from an image or PDF document
   * @param file The file to extract data from
   * @param documentType The type of document (e.g., 'id_document', 'business_registration')
   */
  async extractDocumentData(file: File, documentType: string): Promise<ExtractionResult> {
    try {
      // First, verify we have a valid API key
      if (!this.apiKey || this.apiKey.trim() === '') {
        console.error("Missing Gemini API key");
        return {
          success: false,
          error: "Missing API key. Please check your environment configuration."
        };
      }

      // Log file details for debugging
      console.log(`Processing ${documentType} document: ${file.name}, type: ${file.type}, size: ${(file.size / 1024).toFixed(1)}KB`);

      // Convert the file to base64
      const base64Data = await this.fileToBase64(file);
      if (!base64Data) {
        return {
          success: false,
          error: "Failed to convert file to base64 format."
        };
      }
      
      // Determine what fields to extract based on document type
      const fieldsToExtract = this.getFieldsForDocumentType(documentType);
      
      // Create prompt based on document type
      const prompt = this.createExtractionPrompt(documentType, fieldsToExtract);
      
      // Set the correct MIME type for the file
      let mimeType = file.type;
      if (!mimeType || mimeType === '') {
        // Fallback to common types based on file extension
        const extension = file.name.split('.').pop()?.toLowerCase();
        if (extension === 'pdf') {
          mimeType = 'application/pdf';
        } else if (extension === 'jpg' || extension === 'jpeg') {
          mimeType = 'image/jpeg';
        } else if (extension === 'png') {
          mimeType = 'image/png';
        } else {
          mimeType = 'application/octet-stream';
        }
      }
      
      // Call Gemini API with the image/document and prompt
      const modelName = "gemini-1.5-flash";
      const apiUrl = `${this.baseUrl}/${modelName}:generateContent?key=${this.apiKey}`;
      
      // Prepare data with proper base64 formatting
      let base64Content = base64Data;
      if (base64Content.includes(',')) {
        base64Content = base64Content.split(',')[1]; // Remove the data URL prefix
      }
      
      const requestBody = {
        contents: [
          {
            parts: [
              { text: prompt },
              {
                inline_data: {
                  mime_type: mimeType,
                  data: base64Content
                }
              }
            ]
          }
        ],
        generation_config: {
          temperature: 0.1, // Low temperature for more deterministic outputs
          max_output_tokens: 2048
        }
      };

      console.log(`Sending request to Gemini API for ${documentType} extraction`);
      
      const response = await axios.post(
        apiUrl,
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 60000 // 60 second timeout for large files
        }
      );

      // Process the response to extract structured data
      const result = this.processGeminiResponse(response.data, fieldsToExtract);
      
      // // Add mock data if extraction failed (FOR DEVELOPMENT ONLY - REMOVE IN PRODUCTION)
      // if (!result.success && import.meta.env.DEV) {
      //   const mockData = this.getMockDataForDocumentType(documentType);
      //   if (mockData) {
      //     console.warn('Using mock data for development purposes');
      //     return {
      //       success: true,
      //       extractedData: mockData
      //     };
      //   }
      // }
      
      return result;
      
    } catch (error: any) {
      console.error("Error extracting document data:", error);
      let errorMessage = "Failed to extract data from document. Please try again.";
      
      // Handle specific error types
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("API response error:", error.response.data);
        
        if (error.response.data && error.response.data.error) {
          errorMessage = `API Error: ${error.response.data.error.message || error.response.data.error}`;
        } else if (error.response.status === 403) {
          errorMessage = "API access forbidden. Please check your API key.";
        } else if (error.response.status === 429) {
          errorMessage = "Too many requests. Please try again later.";
        }
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = "No response received from API. Please check your internet connection.";
      } else if (error.message) {
        // Something happened in setting up the request that triggered an Error
        errorMessage = `Request Error: ${error.message}`;
      }
      
      // Special handling for timeouts
      if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
        errorMessage = "The request timed out. Your file may be too large or complex to process.";
      }
      
      // PDF-specific error handling
      if (error.message?.includes('PDF') || (error.file && error.file.type === 'application/pdf')) {
        errorMessage = "There was an issue processing your PDF. The file may be corrupted, password-protected, or too complex.";
      }
      
      return {
        success: false,
        error: errorMessage
      };
    }
  }

  /**
   * Convert a file to base64 format with improved PDF handling
   */
  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      // Use readAsArrayBuffer for PDFs for better handling
      if (file.type === 'application/pdf') {
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
          try {
            const arrayBuffer = reader.result as ArrayBuffer;
            const bytes = new Uint8Array(arrayBuffer);
            let binary = '';
            const chunkSize = 1024; // Process in chunks to avoid memory issues
            
            // Process the PDF data in chunks
            for (let i = 0; i < bytes.byteLength; i += chunkSize) {
              const chunk = bytes.slice(i, Math.min(i + chunkSize, bytes.byteLength));
              chunk.forEach(byte => {
                binary += String.fromCharCode(byte);
              });
            }
            
            const base64 = btoa(binary);
            resolve(`data:${file.type};base64,${base64}`);
          } catch (error) {
            console.error("Error converting PDF to base64:", error);
            reject(error);
          }
        };
      } else {
        // Use the existing method for images
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
      }
      
      reader.onerror = error => {
        console.error("FileReader error:", error);
        reject(error);
      };
    });
  }

  /**
   * Create a prompt for Gemini based on the document type
   */
  private createExtractionPrompt(documentType: string, fields: string[]): string {
    const fieldsList = fields.join(", ");
    
    switch(documentType) {
      case 'id_document':
        return `Extract the following information from this ID document: ${fieldsList}. 
                Format your response as a JSON object with these fields as keys. 
                Return ONLY the JSON object without any additional text.
                If a field is not visible or readable, use "N/A" as the value.`;
      
      case 'business_registration':
        return `Extract the following information from this business registration document: ${fieldsList}.
                Format your response as a JSON object with these fields as keys.
                Return ONLY the JSON object without any additional text.
                If a field is not visible or readable, use "N/A" as the value.`;
      
      case 'tax_document':
        return `Extract the following information from this tax document: ${fieldsList}.
                Format your response as a JSON object with these fields as keys.
                Return ONLY the JSON object without any additional text.
                If a field is not visible or readable, use "N/A" as the value.`;
      
      case 'org_certification':
        return `Extract the following information from this organization certification: ${fieldsList}.
                Format your response as a JSON object with these fields as keys.
                Return ONLY the JSON object without any additional text.
                If a field is not visible or readable, use "N/A" as the value.`;
      
      case 'org_structure':
        return `Extract the following information from this organizational structure document: ${fieldsList}.
                Format your response as a JSON object with these fields as keys.
                Return ONLY the JSON object without any additional text.
                If a field is not visible or readable, use "N/A" as the value.`;
      
      case 'Curricumulum Vitae':
        return `Extract the following information from this CV or resume: ${fieldsList}.
                For workExperience, provide a summary of the most recent positions.
                For skills, provide a comma-separated list of key skills.
                Format your response as a JSON object with these fields as keys.
                Return ONLY the JSON object without any additional text.
                If a field is not visible or readable, use "N/A" as the value.`;
      
      default:
        return `Extract all visible text information from this document and organize it in a structured format.
                Format your response as a JSON object with appropriate keys and values.
                Return ONLY the JSON object without any additional text.
                If any information is not visible or readable, use "N/A" as the value.`;
    }
  }

  /**
   * Define fields to extract based on document type
   */
  private getFieldsForDocumentType(documentType: string): string[] {
    switch(documentType) {
      case 'id_document':
        return [
          "fullName", "idNumber", "dateOfBirth", "expiryDate", 
          "nationality", "gender", "issueDate", "issuingAuthority"
        ];
      
      case 'business_registration':
        return [
          "companyName", "registrationNumber", "registrationDate", 
          "companyType", "registeredAddress", "taxIdentificationNumber"
        ];
      
      case 'tax_document':
        return [
          "taxIdNumber", "taxYear", "taxableIncome", 
          "taxPaid", "filingDate", "taxAuthority"
        ];
      
      case 'org_certification':
        return [
          "organizationName", "certificationType", "certificationNumber", 
          "issueDate", "expiryDate", "issuingBody"
        ];
      
      case 'org_structure':
        return [
          "organizationName", "legalStructure", "mainDepartments", 
          "governingBody", "numberOfMembers", "registrationStatus"
        ];
      
      case 'Curricumulum Vitae':
        return [
          "fullName", "email", "phone", "education", 
          "workExperience", "skills", "certifications"
        ];
      
      default:
        return ["generalInfo"];
    }
  }

  /**
   * Process the response from Gemini API
   */
  private processGeminiResponse(
    response: any, 
    expectedFields: string[]
  ): ExtractionResult {
    try {
      // Check if response has the expected structure
      if (!response || 
          !response.candidates || 
          !response.candidates[0] || 
          !response.candidates[0].content ||
          !response.candidates[0].content.parts ||
          !response.candidates[0].content.parts[0]) {
        
        console.error("Invalid response structure from Gemini API:", response);
        return {
          success: false,
          error: "Received invalid response from the AI service."
        };
      }
      
      // Get the text response from Gemini
      const textResponse = response.candidates[0].content.parts[0].text || "";
      
      if (!textResponse.trim()) {
        return {
          success: false,
          error: "The AI service returned an empty response."
        };
      }
      
      // Try different patterns to extract JSON
      let extractedData: Record<string, string> = {};
      
      try {
        // Try first: direct JSON parsing of the entire response
        extractedData = JSON.parse(textResponse.trim());
        
      } catch (parseError) {
        // Try second: extract JSON from code blocks or brackets
        const jsonMatch = textResponse.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || 
                         textResponse.match(/\{[\s\S]*\}/);
        
        if (jsonMatch) {
          try {
            // Parse the JSON response
            const jsonString = jsonMatch[0].replace(/```(?:json)?\s*|\s*```/g, '');
            extractedData = JSON.parse(jsonString);
          } catch (nestedParseError) {
            console.error("Failed to parse JSON block:", nestedParseError);
            // Will fall back to key-value extraction below
          }
        }
        
        // If still no valid JSON, try to extract key-value pairs from text
        if (Object.keys(extractedData).length === 0) {
          console.log("Falling back to key-value extraction");
          expectedFields.forEach(field => {
            // Try different patterns for key-value extraction
            const patterns = [
              new RegExp(`"${field}"\\s*:\\s*"([^"]+)"`, 'i'), // "field": "value"
              new RegExp(`"${field}"\\s*:\\s*([^,\\n\\}]+)`, 'i'), // "field": value
              new RegExp(`${field}\\s*:\\s*"([^"]+)"`, 'i'), // field: "value"
              new RegExp(`${field}\\s*:\\s*([^,\\n\\}]+)`, 'i'), // field: value
              new RegExp(`${field}[:\\s]+([^\\n]+)`, 'i'), // field: value (loose)
            ];
            
            for (const regex of patterns) {
              const match = textResponse.match(regex);
              if (match && match[1]) {
                extractedData[field] = match[1].trim().replace(/,$/, '');
                break;
              }
            }
            
            // If no match found, set to N/A
            if (!extractedData[field]) {
              extractedData[field] = "N/A";
            }
          });
        }
      }
      
      // Validate the extracted data - ensure all expected fields exist
      let isComplete = true;
      expectedFields.forEach(field => {
        if (extractedData[field] === undefined) {
          extractedData[field] = "N/A";
          isComplete = false;
        }
      });
      
      if (!isComplete) {
        console.warn("Some fields could not be extracted:", 
          expectedFields.filter(field => extractedData[field] === "N/A"));
      }
      
      return {
        success: true,
        extractedData
      };
      
    } catch (error) {
      console.error("Error processing Gemini response:", error);
      return {
        success: false,
        error: "Failed to process the extracted data."
      };
    }
  }

  /**
   * Get mock data for development purposes
   * DEVELOPMENT ONLY - REMOVE IN PRODUCTION
   */
  // private getMockDataForDocumentType(documentType: string): Record<string, string> | null {
    // const mockData: Record<string, Record<string, string>> = {
    //   'id_document': {
    //     'fullName': 'John A. Smith',
    //     'idNumber': 'X123456789',
    //     'dateOfBirth': '1985-05-15',
    //     'expiryDate': '2028-06-30',
    //     'nationality': 'United States',
    //     'gender': 'Male',
    //     'issueDate': '2018-06-30',
    //     'issuingAuthority': 'Department of State'
    //   },
    //   'business_registration': {
    //     'companyName': 'Acme Corporation',
    //     'registrationNumber': 'BRN-987654321',
    //     'registrationDate': '2015-03-12',
    //     'companyType': 'Limited Liability Company',
    //     'registeredAddress': '123 Business Ave, Suite 500, New York, NY 10001',
    //     'taxIdentificationNumber': 'TIN-12345678901'
    //   },
    //   'tax_document': {
    //     'taxIdNumber': 'TAX-9876543210',
    //     'taxYear': '2023',
    //     'taxableIncome': '$1,250,000',
    //     'taxPaid': '$312,500',
    //     'filingDate': '2024-04-15',
    //     'taxAuthority': 'Internal Revenue Service'
    //   },
    //   'org_certification': {
    //     'organizationName': 'Global Health Initiative',
    //     'certificationType': '501(c)(3) Non-Profit',
    //     'certificationNumber': 'NPO-543210',
    //     'issueDate': '2018-01-23',
    //     'expiryDate': 'Perpetual',
    //     'issuingBody': 'Internal Revenue Service'
    //   },
    //   'org_structure': {
    //     'organizationName': 'Global Health Initiative',
    //     'legalStructure': 'Non-profit Corporation',
    //     'mainDepartments': 'Executive, Operations, Fundraising, Programs',
    //     'governingBody': 'Board of Directors',
    //     'numberOfMembers': '12 Board Members',
    //     'registrationStatus': 'Active'
    //   },
    //   'Curricumulum Vitae': {
    //     'fullName': 'Sarah J. Thompson',
    //     'email': 'sarah.thompson@example.com',
    //     'phone': '+1 (555) 123-4567',
    //     'education': 'MBA, Stanford University; BS Computer Science, MIT',
    //     'workExperience': 'Senior Product Manager at Tech Solutions Inc. (2019-Present); Product Analyst at Innovation Labs (2015-2019)',
    //     'skills': 'Product Management, Agile Methodologies, Data Analysis, Project Planning, Team Leadership',
    //     'certifications': 'Certified Scrum Product Owner (CSPO), Google Analytics Certification'
    //   }
    // };
    
    // return mockData[documentType] || null;
  }
// }

export default GeminiService;