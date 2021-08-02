import { Response, Request } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(req: Request, res: Response) {
    const { name, description } = req.body;

    try {
      this.createCategoryUseCase.execute({ name, description });
    } catch (error) {
      res.status(400).json({ error });
    }

    return res.status(201).send();
  }
}

export { CreateCategoryController };
