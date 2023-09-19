import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { RoomService } from './course.service';

const getAllCoursesController = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.getAllCourses(req);
  sendResponse(res, result);
});

const getSingleCourseController = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.getSingleCourse(req);
  sendResponse(res, result);
});
const createCourseController = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.createCourse(req);
  sendResponse(res, result);
});

const updateCourseController = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.updateCourse(req);
  sendResponse(res, result);
});

const deleteCourseController = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.deleteCourse(req);
  sendResponse(res, result);
});

export const CourseController = {
  createCourseController,
  getAllCoursesController,
  getSingleCourseController,
  updateCourseController,
  deleteCourseController
};
