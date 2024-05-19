import UserData from "../models/userSchema.js";
import bodyParser from "body-parser";

export async function findUser(email) {
  try {
    const userData = await UserData.findOne({ email });
    return userData;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function getUsers(req, res) {
  try {
    const userData = await UserData.find();
    res.status(200).send(userData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
}

export async function createUser(req, res) {
  try {
    const { email } = req.body;
    console.log(req.body);
    const userData = await findUser(email);
    if (userData) {
      res.status(400).send("User already exists");
      return;
    }
    const newUser = new UserData(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
}
