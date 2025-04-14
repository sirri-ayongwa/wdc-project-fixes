import { Request, Response } from "express";
import RoasterPage from "../models/RoasterPage";

export const createRoaster = async (req: Request, res: Response) => {
  try {
    // Log the incoming data to debug what's being sent
    console.log("Incoming request body:", req.body);

    const {
      registrationType,
      profilePicture,
      name,
      email,
      phone,
      address,
      idNumber,
      nationality,
      documentAddress,
      accountNumber,

      // New fields
      CompanyLogo,
      CompanyName,
      RegistrationNumber,
      CompanyType,
      RegistrationDate,
      TaxID,
      TaxYear,
      FilingStatus,
      OrganizationName,
      CertificationNumber,
      IssueDate,
      Status,
      Founded,
      President,
    } = req.body;

    const newEntry = new RoasterPage({
      registrationType,
      profilePicture,
      name,
      email,
      phone,
      address,
      idNumber,
      nationality,
      documentAddress,
      accountNumber,

      // Add new fields to be saved
      CompanyLogo,
      CompanyName,
      RegistrationNumber,
      CompanyType,
      RegistrationDate,
      TaxID,
      TaxYear,
      FilingStatus,
      OrganizationName,
      CertificationNumber,
      IssueDate,
      Status,
      Founded,
      President,
    });

    await newEntry.save();

    res.status(201).json({ message: "Roaster entry created successfully", data: newEntry });
  } catch (error) {
    console.error("Error creating Roaster entry:", error);
    res.status(500).json({ message: "Server error" });
  }
};
