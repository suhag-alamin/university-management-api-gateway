import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { OfferedCourseService } from './offeredCourse.service';

const createOfferedCourseController = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseService.createOfferedCourse(req);
  sendResponse(res, result);
});
const getAllOfferedCoursesController = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseService.getAllOfferedCourses(req);
  sendResponse(res, result);
});

const getSingleOfferedCourseController = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseService.getSingleOfferedCourse(req);
  sendResponse(res, result);
});

const updateOfferedCourseController = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseService.updateOfferedCourse(req);
  sendResponse(res, result);
});

const deleteOfferedCourseController = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseService.deleteOfferedCourse(req);
  sendResponse(res, result);
});

export const OfferedCourseController = {
  createOfferedCourseController,
  getAllOfferedCoursesController,
  getSingleOfferedCourseController,
  updateOfferedCourseController,
  deleteOfferedCourseController
};
