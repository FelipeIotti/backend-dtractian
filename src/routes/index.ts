import { Router } from "express";
import { activesRoutes } from "./actives.routes";
import { companyRoutes } from "./company.routes";
import { unitsRoutes } from "./units.routes";
import { usersRoutes } from "./users.routes";

export const router = Router();

router.use('/units', unitsRoutes);
router.use('/users', usersRoutes);
router.use('/actives', activesRoutes);
router.use('/company', companyRoutes);

