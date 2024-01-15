import prisma from '../../shared/prisma'

const createRecipe = async (payload: any) => {
  const result = await prisma.recipe.create({
    data: payload,
  })
  return result
}

const recipeLists = async () => {
  const result = await prisma.recipe.findMany({
    select:{title:true}
  })
  return result
}
export const recipeService = { createRecipe, recipeLists }
