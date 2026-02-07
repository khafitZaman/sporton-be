import { Router } from "express";
import { getProduct, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller";
import { upload } from "../middlewares/upload.middleware";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authenticate, upload.single("imageUrl"), createProduct);
router.get("/", getProduct);
router.get("/:id", getProductById);
router.put("/:id", authenticate, upload.single("imageUrl"), updateProduct);
router.delete("/:id", authenticate, deleteProduct);

export default router;