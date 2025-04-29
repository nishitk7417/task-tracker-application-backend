import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { Project } from '../models/project.model.js';

// Create Project
const createProject = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const userId = req.user._id;

  if (!title) {
    throw new ApiError(400, "Project name is required");
  }

  // Check if user already has 4 projects
  const projectCount = await Project.countDocuments({ user: userId });
  if (projectCount >= 4) {
    throw new ApiError(400, "You can only create up to 4 projects");
  }

  // Create new project
  const newProject = await Project.create({ title, user: userId });

  if (!newProject) {
    throw new ApiError(500, "Failed to create project");
  }

  return res.status(201).json(
    new ApiResponse(201, newProject, "Project created successfully")
  );
});

// Get all Projects for a user
const getUserProjects = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const projects = await Project.find({ user: userId });

  return res.status(200).json(
    new ApiResponse(200, projects, "Projects fetched successfully")
  );
});

// Delete Project by ID
const deleteProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  const project = await Project.findOneAndDelete({ _id: id, user: userId });

  if (!project) {
    throw new ApiError(404, "Project not found or not authorized");
  }

  return res.status(200).json(
    new ApiResponse(200, project, "Project deleted successfully")
  );
});

export {
    createProject,
    getUserProjects,
    deleteProject
}