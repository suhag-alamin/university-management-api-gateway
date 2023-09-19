import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { BuildingController } from './building.controller';

const router = express.Router();

router.get('/', BuildingController.getAllBuildingsController);
router.get('/:id', BuildingController.getSingleBuildingController);

router.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BuildingController.createBuildingController
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BuildingController.updateBuildingController
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BuildingController.deleteBuildingController
);

export const BuildingRoutes = router;
