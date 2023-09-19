import { UploadApiResponse } from 'cloudinary';
import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;

  let uploadedImage: UploadApiResponse | undefined;

  if (file) {
    uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  }

  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }

  const { academicDepartment, academicSemester, academicFaculty } = req.body.student;

  const academicDepartmentResponse = await AuthService.get(
    `/academic-department?syncId=${academicDepartment}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }
  const academicFacultyResponse = await AuthService.get(
    `/academic-faculty?syncId=${academicFaculty}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }
  const academicSemesterResponse = await AuthService.get(
    `/academic-semester?syncId=${academicSemester}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-student', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const createFaculty = async (req: Request) => {
  const file = req.file as IUploadFile;

  let uploadedImage: UploadApiResponse | undefined;

  if (file) {
    uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  }

  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }

  const { academicDepartment, academicFaculty } = req.body.faculty;

  const academicDepartmentResponse = await AuthService.get(
    `/academic-department?syncId=${academicDepartment}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.faculty.academicDepartment = academicDepartmentResponse.data[0].id;
  }
  const academicFacultyResponse = await AuthService.get(
    `/academic-faculty?syncId=${academicFaculty}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.faculty.academicFaculty = academicFacultyResponse.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-faculty', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
const createAdmin = async (req: Request) => {
  const file = req.file as IUploadFile;

  let uploadedImage: UploadApiResponse | undefined;

  if (file) {
    uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  }

  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }

  const { managementDepartment } = req.body.admin;

  const managementDepartmentResponse = await AuthService.get(
    `/management-departments?_id=${managementDepartment}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  if (managementDepartmentResponse.data && Array.isArray(managementDepartmentResponse.data)) {
    req.body.admin.managementDepartment = managementDepartmentResponse.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-admin', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
// ! create faculty admin and get update delete all
export const UserService = {
  createStudent,
  createFaculty,
  createAdmin
};
