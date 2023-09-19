import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';

import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';
import { StudentEnrolledCourseValidation } from './studentEnrolledCourse.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(StudentEnrolledCourseValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.createStudentEnrolledCourseController
);

router.get('/', StudentEnrolledCourseController.getAllStudentEnrolledCoursesController);
router.get('/:id', StudentEnrolledCourseController.getSingleStudentEnrolledCourseController);

router.patch(
  '/:id',
  validateRequest(StudentEnrolledCourseValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.updateStudentEnrolledCourseController
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.deleteStudentEnrolledCourseController
);

export const StudentEnrolledCourseRoutes = router;
