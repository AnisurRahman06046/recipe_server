const createRecipe = async (req, res) => {
  try {
    const result = 'something'
    return result
  } catch (error) {
    console.log(error)
  }
}

export const recipeController = { createRecipe }
