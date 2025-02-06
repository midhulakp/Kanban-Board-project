import express from "express";
import {
  createTask,
  updateTask,
  moveTask,
  deleteTask,
} from "../controllers/taskController.js";
const router = express.Router();
router.post("/:sectionId/tasks", createTask);
router.patch("/:id", updateTask);
router.put("/:id/move", moveTask);
router.delete("/:id", deleteTask);
export default router;
