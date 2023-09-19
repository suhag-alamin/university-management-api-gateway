import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { SemesterRegistrationService } from './semesterRegistration.service';

const createSemesterRegistrationController = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.createSemesterRegistration(req);
  sendResponse(res, result);
});

const getSemesterRegistrationsController = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.getAllSemesterRegistrations(req);
  sendResponse(res, result);
});

const getSingleSemesterRegistrationController = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.getSingleSemesterRegistration(req);
  sendResponse(res, result);
});

const updateSemesterRegistrationController = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.updateSemesterRegistration(req);
  sendResponse(res, result);
});

const deleteSemesterRegistrationController = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.deleteSemesterRegistration(req);
  sendResponse(res, result);
});

const getStudentRegistrationController = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.getStudentRegistration(req);
  sendResponse(res, result);
});

const createStudentRegistrationController = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.createStudentRegistration(req);
  sendResponse(res, result);
});

const getStudentSemesterRegCoursesController = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.getStudentSemesterRegCourses(req);
  sendResponse(res, result);
});

const enrollIntoCourseController = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.enrollIntoCourse(req);
  sendResponse(res, result);
});

const withdrawFromCourseController = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.withDrawFromCourse(req);
  sendResponse(res, result);
});

const confirmStudentRegistrationController = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.confirmStudentRegistration(req);
  sendResponse(res, result);
});

const startNewSemesterController = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.startNewSemester(req);
  sendResponse(res, result);
});

export const SemesterRegistrationController = {
  createSemesterRegistrationController,
  getSemesterRegistrationsController,
  getSingleSemesterRegistrationController,
  updateSemesterRegistrationController,
  deleteSemesterRegistrationController,
  getStudentRegistrationController,
  createStudentRegistrationController,
  getStudentSemesterRegCoursesController,
  enrollIntoCourseController,
  withdrawFromCourseController,
  confirmStudentRegistrationController,
  startNewSemesterController
};
