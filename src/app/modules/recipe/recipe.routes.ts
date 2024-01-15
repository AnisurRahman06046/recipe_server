import { Router } from "express";
import { recipeController } from "./recipe.controller";
const router = Router()

router.post("/create-recipe",recipeController.createRecipe)


export const recipeRoutes = router