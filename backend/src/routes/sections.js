import express from "express";
import {
  getAllSections,
  createSection,
} from "../controllers/sectionController.js";
const router = express.Router();
router.get("/", getAllSections);
router.post("/", createSection);
export default router;
