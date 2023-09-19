import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { RoomService } from './room.service';
const createRoomController = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.createRoom(req);
  sendResponse(res, result);
});
const getAllRoomsController = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.getAllRooms(req);
  sendResponse(res, result);
});

const getSingleRoomController = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.getSingleRoom(req);
  sendResponse(res, result);
});

const updateRoomController = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.updateRoom(req);
  sendResponse(res, result);
});

const deleteRoomController = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.deleteRoom(req);
  sendResponse(res, result);
});

export const RoomController = {
  createRoomController,
  getAllRoomsController,
  getSingleRoomController,
  updateRoomController,
  deleteRoomController
};
