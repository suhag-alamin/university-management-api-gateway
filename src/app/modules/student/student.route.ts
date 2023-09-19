import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentValidation } from './student.validation';
import { StudentController } from './student.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentController.getAllStudentsController
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentController.getSingleStudentController
);
router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentController.updateStudentController
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentController.deleteStudentController
);

export const StudentRoutes = router;
