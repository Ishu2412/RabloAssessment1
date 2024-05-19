import UserData from "../models/userSchema.js";
import sendOTP from "../services/nodemailer.js";

export async function generateOTP(req, res) {
  const { email } = req.body;

  try {
    const user = await UserData.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);
    user.otp = otp;
    sendOTP(email, otp);
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function verifyOTP(req, res) {
  const { email, otp } = req.body;

  try {
    const user = await UserData.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.otp === otp) {
      return res.status(200).json({ message: "OTP verified successfully" });
    }
    res.status(400).json({ message: "Invalid OTP" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
