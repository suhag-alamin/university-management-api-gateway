import { Request, Response } from 'express';
import { AcademicSeamsterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';

const createAcademicSemesterController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSeamsterService.createAcademicSemester(req);

  sendResponse(res, result);
});
const getAllAcademicSemestersController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSeamsterService.getAllAcademicSemesters(req);

  sendResponse(res, result);
});
const getSingleAcademicSemesterController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSeamsterService.getSingleAcademicSemester(req);

  sendResponse(res, result);
});
const updateAcademicSemesterController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSeamsterService.updateAcademicSemester(req);

  sendResponse(res, result);
});
const deleteAcademicSemesterController = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSeamsterService.deleteAcademicSemester(req);

  sendResponse(res, result);
});

export const AcademicSeamsterController = {
  createAcademicSemesterController,
  getAllAcademicSemestersController,
  getSingleAcademicSemesterController,
  updateAcademicSemesterController,
  deleteAcademicSemesterController
};
