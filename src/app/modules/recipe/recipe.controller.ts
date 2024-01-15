/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import { recipeService } from './recipe.service'
import sendApiResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

// create a recipe
const createRecipe = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.body)
    const result = await recipeService.createRecipe(req.body)
    sendApiResponse(res, httpStatus.OK, 'created successfully', result)
  },
)

// get all the recipe list
const recipeLists = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.body)
    const result = await recipeService.recipeLists()
    sendApiResponse(
      res,
      httpStatus.OK,
      'all recipe fetched successfully',
      result,
    )
  },
)

// get a recipe with details
const singleRecipe = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const result = await recipeService.singleRecipe(id)
    sendApiResponse(
      res,
      httpStatus.OK,
      'single recipe is fetched successfully',
      result,
    )
  },
)

// update a recipe
const editRecipe = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const data = req.body
    const result = await recipeService.updateRecipe(id, data)
    sendApiResponse(
      res,
      httpStatus.OK,
      'recipe is updated successfully',
      result,
    )
  },
)

export const recipeController = {
  createRecipe,
  recipeLists,
  singleRecipe,
  editRecipe,
}
