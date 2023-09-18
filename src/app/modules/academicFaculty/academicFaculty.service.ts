import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const createAcademicFaculty = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/academic-faculty', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const getAllAcademicFaculties = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/academic-faculty', {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const getSingleAcademicFaculty = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/academic-faculty/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const updateAcademicFaculty = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(`/academic-faculty/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const deleteAcademicFaculty = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/academic-faculty/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const AcademicFacultyService = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
  deleteAcademicFaculty
};
