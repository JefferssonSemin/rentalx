import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  try {
    createCategoryService.execute({ name, description });
  } catch (error) {
    res.status(400).json({ error });
  }

  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  return res.json(categoriesRepository.list());
});

export { categoriesRoutes };
