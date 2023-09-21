import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService, CoreService } from '../../../shared/axios';

const getAllStudents = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.get('/students', {
    params: req.query,

    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const getSingleStudent = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.get(`/students/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const updateStudent = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.patch(`/students/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const deleteStudent = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.delete(`/students/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const studentCourses = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(`/students/my-courses`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const getStudentCourseSchedules = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(`/students/my-course-schedules`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const studentAcademicInfo = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(`/students/my-academic-info`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const StudentService = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
  studentCourses,
  getStudentCourseSchedules,
  studentAcademicInfo
};
