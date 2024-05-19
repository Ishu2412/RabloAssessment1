import { getUsers, createUser } from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to User API");
});
router.get("/users", getUsers);
router.post("/add-user", createUser);

export default router;
