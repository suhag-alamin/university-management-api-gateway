import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const getAllStudentSemesterPayment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('//student-enrolled-course-payment', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const StudentSemesterPaymentService = {
  getAllStudentSemesterPayment
};
