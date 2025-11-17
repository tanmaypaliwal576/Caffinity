import Reward from "../models/reward.js";
import User from "../models/userModel.js";

// Auto-update tier based on stars
const updateTier = (stars) => {
  if (stars >= 100) return "Platinum";
  if (stars >= 25) return "Gold";
  return "Green";
};

// ✔ GET USER REWARD DATA
export const getUserRewards = async (req, res) => {
  try {
    const reward = await Reward.findOne({ user: req.user.id });

    if (!reward) {
      return res.status(404).json({ message: "Reward record not found" });
    }

    res.json(reward);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✔ ADD STARS (called when order is placed)
export const addStars = async (userId, starsToAdd) => {
  try {
    let reward = await Reward.findOne({ user: userId });

    if (!reward) {
      reward = await Reward.create({ user: userId });
    }

    reward.stars += starsToAdd;
    reward.tier = updateTier(reward.stars);

    await reward.save();
    return reward;
  } catch (error) {
    console.log("Error adding stars:", error);
  }
};

// ✔ REDEEM STARS (e.g., free drink)
export const redeemStars = async (req, res) => {
  try {
    const { stars } = req.body;

    const reward = await Reward.findOne({ user: req.user.id });

    if (!reward || reward.stars < stars) {
      return res.status(400).json({ message: "Not enough stars" });
    }

    reward.stars -= stars;
    reward.tier = updateTier(reward.stars);

    await reward.save();

    res.json({ message: "Reward redeemed successfully", reward });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
