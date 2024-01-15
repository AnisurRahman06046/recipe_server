import prisma from '../../shared/prisma'

// creates a recipe
const createRecipe = async (payload: any) => {
  const result = await prisma.recipe.create({
    data: payload,
  })
  return result
}

// fetch recipe list
const recipeLists = async () => {
  const result = await prisma.recipe.findMany({
    select: { title: true },
  })
  return result
}

// fetch single recipe
const singleRecipe = async (id: number) => {
  const result = await prisma.recipe.findUnique({
    where: { id: id },
  })
  return result
}

// edit a existing recipe
const updateRecipe = async (id: number, payload: any) => {
  // check existing recipe
  const isRecipeExists = await prisma.recipe.findUnique({
    where: { id: id },
  })
  if (!isRecipeExists) {
    throw new Error('Recipe is not found')
  }

  // update recipe
  const result = await prisma.recipe.update({
    where: { id: id },
    data: payload,
  })
  return result
}

export const recipeService = {
  createRecipe,
  recipeLists,
  singleRecipe,
  updateRecipe,
}
