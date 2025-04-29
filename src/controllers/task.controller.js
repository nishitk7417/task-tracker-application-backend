import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { Task } from '../models/task.model.js';
import { Project } from '../models/project.model.js';

// CREATE a task
const createTask = asyncHandler(async (req, res) => {
  const { projectId, title, description, status } = req.body;

  if (!projectId || !title) {
    throw new ApiError(400, "Project ID and title are required");
  }

  const project = await Project.findById(projectId);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  const task = await Task.create({
    project: projectId,
    title,
    description,
    status
  });

  return res.status(201).json(
    new ApiResponse(201, task, "Task created successfully")
  );
});

// READ a task by ID
const getTaskById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);
  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  return res.status(200).json(
    new ApiResponse(200, task, "Task fetched successfully")
  );
});

// UPDATE a task
const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const task = await Task.findById(id);
  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  if (title) task.title = title;
  if (description) task.description = description;
  if (status) {
    task.status = status;
    if (status === "completed" && !task.completedAt) {
      task.completedAt = new Date();
    }
  }

  await task.save();

  return res.status(200).json(
    new ApiResponse(200, task, "Task updated successfully")
  );
});

// DELETE a task
const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  return res.status(200).json(
    new ApiResponse(200, task, "Task deleted successfully")
  );
});

export {
    createTask,
    getTaskById,
    updateTask,
    deleteTask
}