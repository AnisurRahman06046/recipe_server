import prisma from '../../shared/prisma'

const createRecipe = async(payload:any) => {
  const result = await prisma.recipe.create({
    data:payload
  })
  return result
}

export const recipeService = { createRecipe }
