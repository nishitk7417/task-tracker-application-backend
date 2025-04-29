import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createProject, deleteProject, getUserProjects } from "../controllers/project.controller.js";

const router = Router();

router.route("/").post(verifyJWT, createProject);
router.route("/").get(verifyJWT, getUserProjects);
router.route("/:id").delete(verifyJWT, deleteProject);

export default router