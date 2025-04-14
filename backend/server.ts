import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import dotenv from "dotenv";
import roasterRoutes from "./routes/roaster";

//Import Routes
import localAuthRoutes from "./routes/localAuthRoutes"
import professionalAuthRoutes from "./routes/professionalAuthRoutes"
import twilioRoutes from "./routes/twilioRoutes"
import contactRoutes from "./routes/contactRoutes"
import organizationRoutes from "./routes/organizationRoutes"
import nodemailerRoutes from "./routes/nodemailerRoutes"



const app = express(); //Initialize Express Server
app.set('trust proxy', 1);
dotenv.config(); //Initialize dotenv

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

mongoose //Connect to MongoDB
.connect(
  "mongodb+srv://kiruikev99:nmi6M3g2AIjFBGyv@cluster0.jpvjpqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { dbName: "RoasterDB" })
  .then(() => console.log("DB connected"))
  .catch((err:any) => console.log(err));

//MIDDLEWARE
app.use(morgan("dev")); // Request Logger
app.use(express.json()); // Body Parser
app.use(express.urlencoded({ extended: true })); // Body Parser With URL Encoded
app.use(cookieParser()); // Cookie Parser
app.use(cors({credentials: true, origin: [ process.env.ORIGIN || "", process.env.ORIGIN2 || "" ]})); // CORS
app.use(mongoSanitize()); // Sanitize MongoDB / Prevent NoSQL Injection
app.use(rateLimit({ //Rate Limit / Limit Request per 15 minutes
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false, 
}));
app.use(hpp()); // Http Parameter Pollution
app.use(helmet()); // Security 

//ROUTES
app.use("/api/local", localAuthRoutes);
app.use("/api/professional", professionalAuthRoutes);
app.use("/api/twilio", twilioRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/organization", organizationRoutes);
app.use("/api/nodemailer", nodemailerRoutes);
app.use("/api/roaster", roasterRoutes);
//Default Route
app.get("/", (req, res) => {
  res.send("API is running....");
});

//PORT
const port = process.env.PORT || 9000;

//Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
