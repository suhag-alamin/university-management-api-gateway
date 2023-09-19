import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { UserService } from './user.service';

const createStudentController = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createStudent(req);
  sendResponse(res, result);
});

export const UserController = { createStudentController };
