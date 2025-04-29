
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createTask, deleteTask, getTaskById, updateTask } from "../controllers/task.controller.js";

const router = Router();

router.route("/").post(verifyJWT, createTask);
router.route("/:id").get(verifyJWT, getTaskById);
router.route("/:id").put(verifyJWT, updateTask);
router.route("/:id").delete(verifyJWT, deleteTask);

export default router