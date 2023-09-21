import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService, CoreService } from '../../../shared/axios';

const getAllFaculties = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.get('/faculties', {
    params: req.query,

    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const getSingleFaculty = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.get(`/faculties/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const updateFaculty = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;

  const response: IGenericResponse = await AuthService.patch(`/faculties/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const deleteFaculty = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.delete(`/faculties/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const assignCourses = async (req: Request): Promise<IGenericResponse> => {
  const { facultyId } = req.params;
  const response: IGenericResponse = await CoreService.post(
    `/faculties/${facultyId}/assign-courses`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};
const removeCourses = async (req: Request): Promise<IGenericResponse> => {
  const { facultyId } = req.params;
  const response: IGenericResponse = await CoreService.patch(
    `/faculties/${facultyId}/remove-courses`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};
const facultyCourses = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(`/faculties/my-courses`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const getFacultyCourseStudents = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(`/faculties/my-course-students`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const FacultyService = {
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
  assignCourses,
  removeCourses,
  facultyCourses,
  getFacultyCourseStudents
};
