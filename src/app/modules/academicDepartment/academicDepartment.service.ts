import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const createAcademicDepartment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/academic-department', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const getAllAcademicDepartments = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/academic-department', {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const getSingleAcademicDepartment = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/academic-department/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const updateAcademicDepartment = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/academic-department/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};
const deleteAcademicDepartment = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/academic-department/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const AcademicDepartmentService = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment
};
