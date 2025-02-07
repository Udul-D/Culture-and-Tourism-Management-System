import { Router } from "express";
const productRoute = Router();
import productController from "../controllers/product.js";
productRoute.post(
    "/api/product/create",
    productController.createProduct
  );
  productRoute.get(
    "/api/product/getAll",
    productController.getProducts
  );
  productRoute.get(
    "/api/product/get/:id",
    productController.getOneProduct
  );
  productRoute.put(
    "/api/product/update/:id",
    productController.updateProduct
  );
  productRoute.delete(
    "/api/product/delete/:id",
    productController.deleteProduct
  );
  
export default productRoute