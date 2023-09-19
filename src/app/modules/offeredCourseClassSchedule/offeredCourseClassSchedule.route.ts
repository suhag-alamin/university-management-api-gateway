import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { OfferedCourseClassScheduleValidation } from './offeredCourseClassSchedule.validation';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(OfferedCourseClassScheduleValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.createOfferedCourseClassSchedule
);

router.get('/', OfferedCourseClassScheduleController.getAllOfferedCourseClassSchedules);
router.get('/:id', OfferedCourseClassScheduleController.getSingleOfferedCourseClassSchedule);

router.patch(
  '/:id',
  validateRequest(OfferedCourseClassScheduleValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.updateOfferedCourseClassSchedule
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.deleteOfferedCourseClassSchedule
);

export const OfferedCourseClassScheduleRoutes = router;
