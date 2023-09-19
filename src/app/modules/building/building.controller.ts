import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { BuildingService } from './building.service';

const createBuildingController = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.createBuilding(req);
  sendResponse(res, result);
});

const getAllBuildingsController = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.getAllBuildings(req);
  sendResponse(res, result);
});

const getSingleBuildingController = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.getSingleBuilding(req);
  sendResponse(res, result);
});

const updateBuildingController = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.updateBuilding(req);
  sendResponse(res, result);
});

const deleteBuildingController = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.deleteBuilding(req);
  sendResponse(res, result);
});

export const BuildingController = {
  createBuildingController,
  getAllBuildingsController,
  getSingleBuildingController,
  updateBuildingController,
  deleteBuildingController
};
