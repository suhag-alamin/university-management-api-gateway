import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createStudentEnrolledCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(`/student-enrolled-course`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllStudentEnrolledCourses = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/student-enrolled-course', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleStudentEnrolledCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(`/student-enrolled-course/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateStudentEnrolledCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.patch(
    `/student-enrolled-course/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteStudentEnrolledCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.delete(`/student-enrolled-course/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const StudentEnrolledCourseService = {
  createStudentEnrolledCourse,
  getAllStudentEnrolledCourses,
  getSingleStudentEnrolledCourse,
  updateStudentEnrolledCourse,
  deleteStudentEnrolledCourse
};
