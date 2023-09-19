import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { RoomController } from './room.controller';
import { RoomValidation } from './room.validation';

const router = express.Router();

router.get('/', RoomController.getAllRoomsController);
router.get('/:id', RoomController.getSingleRoomController);

router.post(
  '/',
  validateRequest(RoomValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  RoomController.createRoomController
);

router.patch(
  '/:id',
  validateRequest(RoomValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  RoomController.updateRoomController
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  RoomController.deleteRoomController
);

export const RoomRoutes = router;
