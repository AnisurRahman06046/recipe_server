import { Router } from "express";
import { recipeController } from "./recipe.controller";
const router = Router()

router.post("/create-recipe",recipeController.createRecipe)
router.get("/recipe-list",recipeController.recipeLists)

export const recipeRoutes = router