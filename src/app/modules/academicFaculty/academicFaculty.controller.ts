import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { AcademicFacultyService } from './academicFaculty.service';

const createAcademicFacultyController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.createAcademicFaculty(req);

  sendResponse(res, result);
});
const getAllAcademicFacultiesController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.getAllAcademicFaculties(req);

  sendResponse(res, result);
});
const getSingleAcademicFacultyController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.getSingleAcademicFaculty(req);

  sendResponse(res, result);
});
const updateAcademicFacultyController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.updateAcademicFaculty(req);

  sendResponse(res, result);
});
const deleteAcademicFacultyController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.deleteAcademicFaculty(req);

  sendResponse(res, result);
});

export const AcademicFacultyController = {
  createAcademicFacultyController,
  getAllAcademicFacultiesController,
  getSingleAcademicFacultyController,
  updateAcademicFacultyController,
  deleteAcademicFacultyController
};
