import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { StudentEnrolledCourseService } from './studentEnrolledCourse.service';

const createStudentEnrolledCourseController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseService.createStudentEnrolledCourse(req);
  sendResponse(res, result);
});

const getAllStudentEnrolledCoursesController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseService.getAllStudentEnrolledCourses(req);
  sendResponse(res, result);
});

const getSingleStudentEnrolledCourseController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseService.getSingleStudentEnrolledCourse(req);
  sendResponse(res, result);
});

const updateStudentEnrolledCourseController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseService.updateStudentEnrolledCourse(req);
  sendResponse(res, result);
});

const deleteStudentEnrolledCourseController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseService.deleteStudentEnrolledCourse(req);
  sendResponse(res, result);
});

export const StudentEnrolledCourseController = {
  createStudentEnrolledCourseController,
  getAllStudentEnrolledCoursesController,
  getSingleStudentEnrolledCourseController,
  updateStudentEnrolledCourseController,
  deleteStudentEnrolledCourseController
};
