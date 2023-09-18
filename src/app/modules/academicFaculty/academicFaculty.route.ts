import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.post('/', AcademicFacultyController.createAcademicFacultyController);
router.get('/', AcademicFacultyController.getAllAcademicFacultiesController);
router.get('/:id', AcademicFacultyController.getSingleAcademicFacultyController);
router.patch('/:id', AcademicFacultyController.updateAcademicFacultyController);
router.delete('/:id', AcademicFacultyController.deleteAcademicFacultyController);

export const AcademicFacultyRoutes = router;
