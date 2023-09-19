import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseController } from './offeredCourse.controller';
import { OfferedCourseValidation } from './offeredCourse.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(OfferedCourseValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseController.createOfferedCourseController
);

router.get('/', OfferedCourseController.getAllOfferedCoursesController);
router.get('/:id', OfferedCourseController.getSingleOfferedCourseController);

router.patch(
  '/:id',
  validateRequest(OfferedCourseValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseController.updateOfferedCourseController
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseController.deleteOfferedCourseController
);

export const OfferedCourseRoutes = router;
