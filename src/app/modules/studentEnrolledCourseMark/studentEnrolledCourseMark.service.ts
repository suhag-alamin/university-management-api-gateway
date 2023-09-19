import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const getAllStudentMarks = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/student-enrolled-course-marks', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getStudentCourseMarks = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    '/student-enrolled-course-marks/my-marks',
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const updateStudentMark = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/student-enrolled-course-marks/update-marks`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const updateFinalMarks = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/student-enrolled-course-marks/update-final-marks`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const StudentEnrolledCourseMarkService = {
  getAllStudentMarks,
  getStudentCourseMarks,
  updateStudentMark,
  updateFinalMarks
};
