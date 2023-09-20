import { Request, Response } from 'express';
import config from '../../../config';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { AuthenticationService } from './auth.service';

const loginUserController = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthenticationService.loginUser(req);

  const { refreshToken, ...othersData } = result.data;

  // set refresh token into cookie

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse(res, {
    statusCode: result.statusCode,
    success: result.success,
    message: result.message,
    data: othersData
  });
});
const refreshTokenController = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthenticationService.refreshToken(req);

  const { refreshToken, ...othersData } = result.data;

  // set refresh token into cookie

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse(res, {
    statusCode: result.statusCode,
    success: result.success,
    message: result.message,
    data: othersData
  });
});
const changePasswordController = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthenticationService.changePassword(req);
  sendResponse(res, result);
});

export const AuthController = {
  loginUserController,
  refreshTokenController,
  changePasswordController
};
