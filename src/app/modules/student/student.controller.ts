import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { StudentService } from './student.service';

const getAllStudentsController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.getAllStudents(req);

  sendResponse(res, result);
});
const getSingleStudentController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.getSingleStudent(req);

  sendResponse(res, result);
});
const updateStudentController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.updateStudent(req);

  sendResponse(res, result);
});
const deleteStudentController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.deleteStudent(req);

  sendResponse(res, result);
});
const studentCoursesController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.studentCourses(req);

  sendResponse(res, result);
});
const getStudentCourseSchedulesController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.getStudentCourseSchedules(req);

  sendResponse(res, result);
});
const studentAcademicInfoController = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.studentAcademicInfo(req);

  sendResponse(res, result);
});

export const StudentController = {
  getAllStudentsController,
  getSingleStudentController,
  updateStudentController,
  deleteStudentController,
  getStudentCourseSchedulesController,
  studentAcademicInfoController,
  studentCoursesController
};
