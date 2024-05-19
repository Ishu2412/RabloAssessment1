import express from "express";
import { generateOTP, verifyOTP } from "../controllers/otpController.js";

const router = express.Router();

router.post("/generate-otp", generateOTP);
router.post("/verify-otp", verifyOTP);

export default router;
