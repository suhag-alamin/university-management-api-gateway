import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';
const createOfferedCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(`/offered-courses`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getAllOfferedCourses = async (req: Request): Promise<IGenericResponse> => {
  console.log(req);
  const response: IGenericResponse = await CoreService.get('/offered-courses', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleOfferedCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(`/offered-courses/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateOfferedCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.patch(`/offered-courses/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteOfferedCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.delete(`/offered-courses/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const OfferedCourseService = {
  createOfferedCourse,
  getAllOfferedCourses,
  getSingleOfferedCourse,
  updateOfferedCourse,
  deleteOfferedCourse
};
