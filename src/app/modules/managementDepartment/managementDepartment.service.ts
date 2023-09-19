import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService as HttpService } from '../../../shared/axios';

const createManagementDepartment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/management-departments', req.body);

  return response;
};
const getAllManagementDepartments = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/management-departments', {
    params: req.query
  });

  return response;
};
const getSingleManagementDepartment = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/management-departments/${id}`);

  return response;
};
const updateManagementDepartment = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/management-departments/${id}`,
    req.body
  );

  return response;
};
const deleteManagementDepartment = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/management-departments/${id}`);

  return response;
};

export const ManagementDepartmentService = {
  createManagementDepartment,
  getAllManagementDepartments,
  getSingleManagementDepartment,
  updateManagementDepartment,
  deleteManagementDepartment
};
