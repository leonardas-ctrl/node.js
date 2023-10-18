import express from "express";
import {
  createMembership,
  createUser,
  deleteMembershipById,
  getMemberships,
  getUsersByOrder,
} from "./controllers.js";

const router = express.Router();

router.get("/memberships", getMemberships);

router.post("/memberships", createMembership);

router.delete("/membershipsDelete/:id", deleteMembershipById);

router.get("/users/:order", getUsersByOrder);

router.post("/users", createUser);

export default router;
