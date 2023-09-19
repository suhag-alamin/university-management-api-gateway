import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';
const createOfferedCourseClassSchedule = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/offered-course-class-schedules`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const getAllOfferedCourseClassSchedules = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/offered-course-class-schedules', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleOfferedCourseClassSchedule = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(
    `/offered-course-class-schedules/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const updateOfferedCourseClassSchedule = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.patch(
    `/offered-course-class-schedules/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteOfferedCourseClassSchedule = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.delete(
    `/offered-course-class-schedules/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const OfferedCourseClassScheduleService = {
  createOfferedCourseClassSchedule,
  getAllOfferedCourseClassSchedules,
  getSingleOfferedCourseClassSchedule,
  updateOfferedCourseClassSchedule,
  deleteOfferedCourseClassSchedule
};
