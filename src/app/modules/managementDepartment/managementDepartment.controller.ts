import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { ManagementDepartmentService } from './managementDepartment.service';

const createManagementDepartmentController = catchAsync(async (req: Request, res: Response) => {
  const result = await ManagementDepartmentService.createManagementDepartment(req);

  sendResponse(res, result);
});
const getAllManagementDepartmentsController = catchAsync(async (req: Request, res: Response) => {
  console.log('HITTING');
  const result = await ManagementDepartmentService.getAllManagementDepartments(req);

  sendResponse(res, result);
});
const getSingleManagementDepartmentController = catchAsync(async (req: Request, res: Response) => {
  const result = await ManagementDepartmentService.getSingleManagementDepartment(req);

  sendResponse(res, result);
});
const updateManagementDepartmentController = catchAsync(async (req: Request, res: Response) => {
  const result = await ManagementDepartmentService.updateManagementDepartment(req);

  sendResponse(res, result);
});
const deleteManagementDepartmentController = catchAsync(async (req: Request, res: Response) => {
  const result = await ManagementDepartmentService.deleteManagementDepartment(req);

  sendResponse(res, result);
});

export const ManagementDepartmentController = {
  createManagementDepartmentController,
  getAllManagementDepartmentsController,
  getSingleManagementDepartmentController,
  updateManagementDepartmentController,
  deleteManagementDepartmentController
};
