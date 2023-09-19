import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { StudentEnrolledCourseMarkService } from './studentEnrolledCourseMark.service';

const getAllStudentMarksController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseMarkService.getAllStudentMarks(req);
  sendResponse(res, result);
});

const getStudentCourseMarksController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseMarkService.getStudentCourseMarks(req);
  sendResponse(res, result);
});

const updateStudentMarkController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseMarkService.updateStudentMark(req);
  sendResponse(res, result);
});

const updateFinalMarksController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseMarkService.updateFinalMarks(req);
  sendResponse(res, result);
});

export const StudentEnrolledCourseMarkController = {
  getAllStudentMarksController,
  getStudentCourseMarksController,
  updateStudentMarkController,
  updateFinalMarksController
};
