import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controller';
import { StudentEnrolledCourseMarkValidation } from './studentEnrolledCourseMark.validation';

const router = express.Router();

router.get('/', StudentEnrolledCourseMarkController.getAllStudentMarksController);
router.get('/my-marks', StudentEnrolledCourseMarkController.getStudentCourseMarksController);

router.post(
  '/update-marks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentMarks),
  auth(ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.updateStudentMarkController
);

router.post(
  '/update-course-final-marks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentCourseFinalMarks),
  auth(ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.updateFinalMarksController
);

export const StudentEnrolledCourseMarksRoutes = router;
