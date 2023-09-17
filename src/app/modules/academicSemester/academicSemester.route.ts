import express from 'express';
import { AcademicSeamsterController } from './academicSemester.controller';

const router = express.Router();

router.post('/', AcademicSeamsterController.createAcademicSemesterController);
router.get('/', AcademicSeamsterController.getAllAcademicSemestersController);
router.get('/:id', AcademicSeamsterController.getSingleAcademicSemesterController);
router.patch('/:id', AcademicSeamsterController.updateAcademicSemesterController);
router.delete('/:id', AcademicSeamsterController.deleteAcademicSemesterController);

export const AcademicSemesterRoutes = router;
