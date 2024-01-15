import prisma from '../../shared/prisma'

const createRecipe = async(payload:any) => {
  const result = await prisma.recipe.create(payload)
  return result
}

export const recipeService = { createRecipe }
