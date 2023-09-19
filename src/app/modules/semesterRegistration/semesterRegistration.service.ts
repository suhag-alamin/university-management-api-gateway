import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createSemesterRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(`/semester-registration`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getAllSemesterRegistrations = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/semester-registration', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleSemesterRegistration = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(`/semester-registration/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateSemesterRegistration = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.patch(
    `/semester-registration/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteSemesterRegistration = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.delete(`/semester-registration/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

// student

const getStudentRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    `/semester-registration/get-my-registration`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const createStudentRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semester-registration/student-registration`,
    {},
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getStudentSemesterRegCourses = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    `/semester-registration/get-my-semester-courses`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const enrollIntoCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semester-registration/enroll-into-course`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const withDrawFromCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semester-registration/withdraw-from-course`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const confirmStudentRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semester-registration/confirm-student-registration`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const startNewSemester = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.post(
    `/semester-registration/${id}/start-new-semester`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const SemesterRegistrationService = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
  deleteSemesterRegistration,
  getStudentRegistration,
  createStudentRegistration,
  getStudentSemesterRegCourses,
  enrollIntoCourse,
  withDrawFromCourse,
  confirmStudentRegistration,
  startNewSemester
};
