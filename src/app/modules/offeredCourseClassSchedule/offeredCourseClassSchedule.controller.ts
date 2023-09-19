import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { OfferedCourseClassScheduleService } from './offeredCourseClassSchedule.service';
const createOfferedCourseClassSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseClassScheduleService.createOfferedCourseClassSchedule(req);
  sendResponse(res, result);
});

const getAllOfferedCourseClassSchedules = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseClassScheduleService.getAllOfferedCourseClassSchedules(req);
  sendResponse(res, result);
});

const getSingleOfferedCourseClassSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseClassScheduleService.getSingleOfferedCourseClassSchedule(req);
  sendResponse(res, result);
});

const updateOfferedCourseClassSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseClassScheduleService.updateOfferedCourseClassSchedule(req);
  sendResponse(res, result);
});

const deleteOfferedCourseClassSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseClassScheduleService.deleteOfferedCourseClassSchedule(req);
  sendResponse(res, result);
});

export const OfferedCourseClassScheduleController = {
  createOfferedCourseClassSchedule,
  getAllOfferedCourseClassSchedules,
  getSingleOfferedCourseClassSchedule,
  updateOfferedCourseClassSchedule,
  deleteOfferedCourseClassSchedule
};
