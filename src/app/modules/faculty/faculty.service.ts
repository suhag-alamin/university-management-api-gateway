import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService as HttpService } from '../../../shared/axios';

const getAllFaculties = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/faculties', {
    params: req.query,

    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const getSingleFaculty = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/faculties/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const updateFaculty = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;

  const response: IGenericResponse = await HttpService.patch(`/faculties/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const deleteFaculty = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/faculties/${id}`, {
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
  deleteFaculty
};
