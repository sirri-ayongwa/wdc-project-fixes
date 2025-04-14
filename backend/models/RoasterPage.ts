import mongoose, { Schema, Document, Model } from "mongoose";

// Interface for TypeScript
interface IRoasterPage extends Document {
  registrationType: string;
  profilePicture: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  idNumber: string;
  nationality: string;
  documentAddress: string;
  accountNumber: string;

  CompanyLogo: string;
  CompanyName: string;
  RegistrationNumber: string;
  CompanyType: string;
  RegistrationDate: string;
  TaxID: string;
  TaxYear: string;
  FilingStatus: string;
  OrganizationName: string;
  CertificationNumber: string;
  IssueDate: string;
  Status: string;
  Founded : string;
  President: string;
}

// Schema definition
const RoasterPageSchema: Schema = new Schema({
  registrationType: { type: String, required: true },
  profilePicture: { type: String, required: false }, // This can be a URL or base64 string
  name: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  address: { type: String, required: false },
  idNumber: { type: String, required: false },
  nationality: { type: String, required: false },
  documentAddress: { type: String, required: false },

  
  CompanyLogo: { type: String, required: false },
  CompanyName: { type: String, required: false },
  RegistrationNumber: { type: String, required: false },
  CompanyType: { type: String, required: false },
  RegistrationDate: { type: String, required: false },
  accountNumber: { type: String, required: false },
  TaxID: { type: String, required: false },
  TaxYear: { type: String, required: false },
  FilingStatus: { type: String, required: false },
  OrganizationName: { type: String, required: false },
  CertificationNumber: { type: String, required: false },
  IssueDate: { type: String, required: false },
  Status: { type: String, required: false },
  Founded: { type: String, required: false },
  President: { type: String, required: false },
});

const RoasterPage = mongoose.model<IRoasterPage>("RoasterPage", RoasterPageSchema, "RoasterPage");

export default RoasterPage;
