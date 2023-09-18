import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post('/', AcademicDepartmentController.createAcademicDepartmentController);
router.get('/', AcademicDepartmentController.getAllAcademicDepartmentsController);
router.get('/:id', AcademicDepartmentController.getSingleAcademicDepartmentController);
router.patch('/:id', AcademicDepartmentController.updateAcademicDepartmentController);
router.delete('/:id', AcademicDepartmentController.deleteAcademicDepartmentController);

export const AcademicDepartmentRoutes = router;
