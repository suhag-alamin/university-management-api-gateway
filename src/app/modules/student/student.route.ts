import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentValidation } from './student.validation';
import { StudentController } from './student.controller';

const router = express.Router();

router.get('/', StudentController.getAllStudentsController);
router.get('/:id', StudentController.getSingleStudentController);
router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  StudentController.updateStudentController
);
router.delete('/:id', StudentController.deleteStudentController);

export const StudentRoutes = router;
