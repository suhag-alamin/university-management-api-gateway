import express from 'express';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRoutes
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
