import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  d_o_b: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  mobile_no: { type: String, required: true, match: [/^(\+91)?[6-9]\d{9}$/] },
  guardian_no: { type: String, match: [/^(\+91)?[6-9]\d{9}$/] },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pinCode: { type: String, required: true },
  referral_code: { type: String },
  school: { type: String, required: true },
  class: { type: String, required: true },
  board: { type: String, required: true },
  subjects: { type: [String], required: true },
});

const UserData = mongoose.model("UserData", userSchema);

export default UserData;
