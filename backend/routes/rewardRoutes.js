import express from "express";
import {
  getUserRewards,
  redeemStars,
} from "../controllers/rewardController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// GET user's reward info
router.get("/", authMiddleware, getUserRewards);

// Redeem reward
router.post("/redeem", authMiddleware, redeemStars);

export default router;
