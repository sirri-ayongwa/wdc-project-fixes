export type RosterType = 'individual' | 'company' | 'organization';

export interface DocumentRequirement {
  id: string;
  name: string;
  description: string;
  required: boolean;
}

export interface DocumentData {
  id: string;
  name: string;
  file: File;
  preview: string;
  extractedData: Record<string, string> | null;
  status: 'processing' | 'extracted' | 'error';
}

// Document requirements for each roster type
export const documentRequirements: Record<RosterType, DocumentRequirement[]> = {
  individual: [
    {
      id: 'id_document',
      name: 'Identification Document',
      description: 'Upload a valid government-issued ID (passport, driver\'s license, etc.)',
      required: true
    },
    {
      id: 'proof_of_address',
      name: 'Professional CV',
      description: 'Upload your latest CV or resume',
      required: true
    }
  ],
  company: [
    {
      id: 'business_registration',
      name: 'Business Registration',
      description: 'Certificate of incorporation or equivalent document',
      required: true
    },
    {
      id: 'tax_document',
      name: 'Tax Registration',
      description: 'Business tax registration certificate or number',
      required: true
    },
    {
      id: 'financial_statement',
      name: 'Financial Statement',
      description: 'Recent financial statement or bank reference',
      required: false
    }
  ],
  organization: [
    {
      id: 'org_certification',
      name: 'Organization Certificate',
      description: 'Non-profit registration or equivalent document',
      required: true
    },
    {
      id: 'org_structure',
      name: 'Organizational Structure',
      description: 'Document outlining the organization\'s structure',
      required: true
    },
    {
      id: 'founding_documents',
      name: 'Founding Documents',
      description: 'Articles of association or similar founding documents',
      required: false
    }
  ]
};

// For development/testing - mock data for AI extraction
export const mockExtractedData: Record<string, Record<string, string>> = {
  'id_document': {
    'fullName': 'John A. Smith',
    'idNumber': 'X123456789',
    'dateOfBirth': '1985-05-15',
    'expiryDate': '2028-06-30',
    'nationality': 'United States',
    'gender': 'Male',
    'issueDate': '2018-06-30',
    'issuingAuthority': 'Department of State'
  },
  'business_registration': {
    'companyName': 'Acme Corporation',
    'registrationNumber': 'BRN-987654321',
    'registrationDate': '2015-03-12',
    'companyType': 'Limited Liability Company',
    'registeredAddress': '123 Business Ave, Suite 500, New York, NY 10001',
    'taxIdentificationNumber': 'TIN-12345678901'
  },
  'tax_document': {
    'taxIdNumber': 'TAX-9876543210',
    'taxYear': '2023',
    'taxableIncome': '$1,250,000',
    'taxPaid': '$312,500',
    'filingDate': '2024-04-15',
    'taxAuthority': 'Internal Revenue Service'
  },
  'org_certification': {
    'organizationName': 'Global Health Initiative',
    'certificationType': '501(c)(3) Non-Profit',
    'certificationNumber': 'NPO-543210',
    'issueDate': '2018-01-23',
    'expiryDate': 'Perpetual',
    'issuingBody': 'Internal Revenue Service'
  },
  'org_structure': {
    'organizationName': 'Global Health Initiative',
    'legalStructure': 'Non-profit Corporation',
    'mainDepartments': 'Executive, Operations, Fundraising, Programs',
    'governingBody': 'Board of Directors',
    'numberOfMembers': '12 Board Members',
    'registrationStatus': 'Active'
  }
};