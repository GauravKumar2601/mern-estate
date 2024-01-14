import express from "express";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post(
  "https://mern-estate-server-inky.vercel.app/create",
  verifyToken,
  createListing
);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("https://mern-estate-server-inky.vercel.app/get/:id", getListing);
router.get("https://mern-estate-server-inky.vercel.app/get", getListings);

export default router;
