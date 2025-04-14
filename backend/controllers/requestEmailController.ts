import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const sendGeneralRequestEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, message, trainingType } = req.body;

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service (e.g., Gmail, Outlook, etc.)
      auth: {
        user: "awilobest@gmail.com", // Replace with your email
        pass: "Test123", // Replace with your email password or app password
      },
    });

    // Email options
    const mailOptions = {
      from: email, // User's email
      to: "awilobest@gmail.com", // Replace with the recipient email
      subject: `Training Request: ${trainingType}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
};