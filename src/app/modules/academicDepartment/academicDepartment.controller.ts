import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { AcademicDepartmentService } from './academicDepartment.service';

const createAcademicDepartmentController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.createAcademicDepartment(req);

  sendResponse(res, result);
});
const getAllAcademicDepartmentsController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.getAllAcademicDepartments(req);

  sendResponse(res, result);
});
const getSingleAcademicDepartmentController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.getSingleAcademicDepartment(req);

  sendResponse(res, result);
});
const updateAcademicDepartmentController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.updateAcademicDepartment(req);

  sendResponse(res, result);
});
const deleteAcademicDepartmentController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.deleteAcademicDepartment(req);

  sendResponse(res, result);
});

export const AcademicDepartmentController = {
  createAcademicDepartmentController,
  getAllAcademicDepartmentsController,
  getSingleAcademicDepartmentController,
  updateAcademicDepartmentController,
  deleteAcademicDepartmentController
};
