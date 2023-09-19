import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { FacultyService } from './faculty.service';

const getAllFacultiesController = catchAsync(async (req: Request, res: Response) => {
  const result = await FacultyService.getAllFaculties(req);

  sendResponse(res, result);
});
const getSingleFacultyController = catchAsync(async (req: Request, res: Response) => {
  const result = await FacultyService.getSingleFaculty(req);

  sendResponse(res, result);
});
const updateFacultyController = catchAsync(async (req: Request, res: Response) => {
  const result = await FacultyService.updateFaculty(req);

  sendResponse(res, result);
});
const deleteFacultyController = catchAsync(async (req: Request, res: Response) => {
  const result = await FacultyService.deleteFaculty(req);

  sendResponse(res, result);
});

export const FacultyController = {
  getAllFacultiesController,
  getSingleFacultyController,
  updateFacultyController,
  deleteFacultyController
};
