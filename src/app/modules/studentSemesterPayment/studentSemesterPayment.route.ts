import express from 'express';
import { StudentSemesterPaymentController } from './studentSemesterPayment.controller';

const router = express.Router();

router.get('/', StudentSemesterPaymentController.getAllStudentSemesterPaymentController);

export const StudentSemesterPaymentRoutes = router;
