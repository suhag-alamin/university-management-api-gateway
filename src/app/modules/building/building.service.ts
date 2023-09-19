import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const createBuilding = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(`/buildings`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllBuildings = async (req: Request): Promise<IGenericResponse> => {
  console.log(req);
  const response: IGenericResponse = await HttpService.get('/buildings', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleBuilding = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/buildings/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateBuilding = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(`/buildings/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteBuilding = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/buildings/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const BuildingService = {
  getAllBuildings,
  getSingleBuilding,
  updateBuilding,
  deleteBuilding,
  createBuilding
};
