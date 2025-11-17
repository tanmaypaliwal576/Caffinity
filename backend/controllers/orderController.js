import Order from "../models/Order.js";
import { addStars } from "./rewardController.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
  try {
    const { items } = req.body;

    // calculate total
    const totalAmount = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const order = await Order.create({
      user: req.user.id,
      items,
      totalAmount,
    });

    // ⭐ Add reward stars (1 star = $1)
    await addStars(req.user.id, Math.floor(totalAmount));

    res.json({ message: "Order placed", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER ORDERS
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
