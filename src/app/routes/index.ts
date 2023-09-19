import express from 'express';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { BuildingRoutes } from '../modules/building/building.route';
import { CourseRoutes } from '../modules/course/course.route';
import { OfferedCourseRoutes } from '../modules/offeredCourse/offeredCourse.route';
import { OfferedCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.route';
import { OfferedCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.route';
import { RoomRoutes } from '../modules/room/room.route';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.route';
import { StudentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.route';
import { StudentEnrolledCourseMarksRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.route';
import { StudentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.route';
import { UserRoutes } from '../modules/user/user.route';
import { ManagementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.route';
import { StudentRoutes } from '../modules/student/student.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/management-departments',
    route: ManagementDepartmentRoutes
  },
  {
    path: '/users',
    route: UserRoutes
  },
  {
    path: '/students',
    route: StudentRoutes
  },
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
  },
  {
    path: '/buildings',
    route: BuildingRoutes
  },
  {
    path: '/rooms',
    route: RoomRoutes
  },
  {
    path: '/courses',
    route: CourseRoutes
  },
  {
    path: '/semester-registration',
    route: SemesterRegistrationRoutes
  },
  {
    path: '/offered-courses',
    route: OfferedCourseRoutes
  },
  {
    path: '/offered-course-sections',
    route: OfferedCourseSectionRoutes
  },
  {
    path: '/offered-course-class-schedule',
    route: OfferedCourseClassScheduleRoutes
  },
  {
    path: '/student-enrolled-course-marks',
    route: StudentEnrolledCourseMarksRoutes
  },
  {
    path: '/student-enrolled-course',
    route: StudentEnrolledCourseRoutes
  },
  {
    path: '/student-enrolled-course-payment',
    route: StudentSemesterPaymentRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
