/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { recipeService } from "./recipe.service"
import sendApiResponse from "../../utils/sendResponse"
import httpStatus from "http-status"

const createRecipe = catchAsync(
    async (req:Request, res:Response,next:NextFunction) => {
        const result = await recipeService.createRecipe(req.body)
        sendApiResponse(res,httpStatus.OK,"created successfully",result)
      }
)

export const recipeController = { createRecipe }
