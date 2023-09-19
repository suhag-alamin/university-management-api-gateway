import express, { Request, NextFunction, Response } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';

const router = express.Router();

router.post(
  '/create-student',
  //   validateRequest(UserValidation.createStudentZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createStudentZodSchema.parse(JSON.parse(req.body.data));
    return UserController.createStudentController(req, res, next);
  }
);

export const UserRoutes = router;
