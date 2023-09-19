import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { AdminService } from './admin.service';

const getAllAdminsController = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getAllAdmins(req);

  sendResponse(res, result);
});
const getSingleAdminController = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getSingleAdmin(req);

  sendResponse(res, result);
});
const updateAdminController = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.updateAdmin(req);

  sendResponse(res, result);
});
const deleteAdminController = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.deleteAdmin(req);

  sendResponse(res, result);
});

export const AdminController = {
  getAllAdminsController,
  getSingleAdminController,
  updateAdminController,
  deleteAdminController
};
