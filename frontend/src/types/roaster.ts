export type RosterType = "individual" | "company" | "organization";

export interface DocumentData {
  id: string;
  name: string;
  file: File | null;
  preview: string | null;
  extractedData: Record<string, string> | null;
  status: "pending" | "processing" | "extracted" | "error";
}

export interface RegistrationData {
  type: RosterType | null;
  name: string;
  email: string;
  phone: string;
  address: string;
  documents: DocumentData[];
  additionalInfo: Record<string, string>;
}

export interface DocumentRequirement {
  id: string;
  name: string;
  description: string;
  required: boolean;
}

export const documentRequirements: Record<RosterType, DocumentRequirement[]> = {
  individual: [
    {
      id: "id_document",
      name: "ID Document",
      description: "Government-issued ID (passport, driver's license, etc.)",
      required: true,
    },
    {
      id: "proof_address",
      name: "Proof of Address",
      description: "Utility bill or bank statement from the last 3 months",
      required: false,
    },
  ],
  company: [
    {
      id: "business_registration",
      name: "Business Registration",
      description: "Certificate of incorporation or business registration",
      required: true,
    },
    {
      id: "tax_document",
      name: "Tax Document",
      description: "Tax registration certificate or tax identification document",
      required: true,
    },
    {
      id: "financial_statement",
      name: "Financial Statement",
      description: "Recent financial statement or bank statement",
      required: false,
    },
  ],
  organization: [
    {
      id: "org_certification",
      name: "Organization Certification",
      description: "Official certification of organization status",
      required: true,
    },
    {
      id: "org_structure",
      name: "Organization Structure",
      description: "Document showing the organization's structure and leadership",
      required: true,
    },
    {
      id: "org_mission",
      name: "Mission Statement",
      description: "Official document stating the organization's mission and purpose",
      required: false,
    },
  ],
};

export const mockExtractedData: Record<string, Record<string, string>> = {
  id_document: {
    "Full Name": "John Michael Doe",
    "Date of Birth": "15/04/1985",
    "ID Number": "AB123456789",
    "Expiry Date": "23/07/2028",
    "Nationality": "United States",
  },
  proof_address: {
    "Address": "123 Main Street, Apt 4B, New York, NY 10001",
    "Name": "John M. Doe",
    "Issue Date": "03/02/2023",
    "Account Number": "****7890",
  },
  business_registration: {
    "Company Name": "Acme Corporation Inc.",
    "Registration Number": "C123456789",
    "Registration Date": "12/06/2015",
    "Company Type": "Limited Liability Company",
    "Registered Address": "456 Business Avenue, Suite 200, San Francisco, CA 94107",
  },
  tax_document: {
    "Company Name": "Acme Corporation Inc.",
    "Tax ID": "98-7654321",
    "Tax Year": "2023",
    "Filing Status": "Active",
  },
  org_certification: {
    "Organization Name": "Global Health Initiative",
    "Certification Number": "NGO78901234",
    "Issue Date": "25/09/2018",
    "Status": "Active Non-Profit Organization",
    "Registered Address": "789 Charity Road, Washington DC, 20001",
  },
  org_structure: {
    "Organization Name": "Global Health Initiative",
    "President": "Dr. Sarah Johnson",
    "Board Members": "5",
    "Founded": "2010",
  },
};
