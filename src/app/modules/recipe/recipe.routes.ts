import { Router } from 'express'
import { recipeController } from './recipe.controller'
const router = Router()

router.post('/create-recipe', recipeController.createRecipe)
router.get('/recipe-list', recipeController.recipeLists)
router.get('/single-recipe/:id', recipeController.singleRecipe)
router.patch('/edit-recipe/:id', recipeController.editRecipe)

export const recipeRoutes = router
