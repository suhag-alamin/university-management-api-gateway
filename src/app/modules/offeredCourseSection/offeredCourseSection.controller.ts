import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { OfferedCourseSectionService } from './offeredCourseSection.service';

const createOfferCourseSectionController = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseSectionService.createOfferCourseSection(req);
  sendResponse(res, result);
});

const getAllOfferCourseSectionsController = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseSectionService.getAllOfferCourseSections(req);
  sendResponse(res, result);
});

const getSingleOfferCourseSectionController = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseSectionService.getSingleOfferCourseSection(req);
  sendResponse(res, result);
});

const updateOfferCourseSectionController = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseSectionService.updateOfferCourseSection(req);
  sendResponse(res, result);
});

const deleteOfferCourseSectionController = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseSectionService.deleteOfferCourseSection(req);
  sendResponse(res, result);
});

export const OfferedCourseSectionController = {
  createOfferCourseSectionController,
  getAllOfferCourseSectionsController,
  getSingleOfferCourseSectionController,
  updateOfferCourseSectionController,
  deleteOfferCourseSectionController
};
