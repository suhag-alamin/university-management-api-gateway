import express from 'express';
import { ManagementDepartmentController } from './managementDepartment.controller';

const router = express.Router();

router.post('/', ManagementDepartmentController.createManagementDepartmentController);
router.get('/', ManagementDepartmentController.getAllManagementDepartmentsController);
router.get('/:id', ManagementDepartmentController.getSingleManagementDepartmentController);
router.patch('/:id', ManagementDepartmentController.updateManagementDepartmentController);
router.delete('/:id', ManagementDepartmentController.deleteManagementDepartmentController);

export const ManagementDepartmentRoutes = router;
