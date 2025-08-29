import { Request, Response } from "express";
import catchAsync from "../../Utility/catchAsync";
import sendResponse from "../../Utility/sendResponse";
import httpStatus from "http-status";
import postService from "./post.service";

//1.create one.

const postOne = catchAsync(async (req: Request, res: Response) => {
  const result = await postService.createOne(req.body);

  sendResponse(res, {
    data: result,
    statusCode: httpStatus.OK,
    message: "post created successfully.",
    success: true,
  });
});

//2. get one post.

const get = catchAsync(async (req: Request, res: Response) => {
  let result;

  if (req.params.id) {
    result = await postService.getOneById(req.params.id);
  } else {
    result = await postService.getAll();
  }

  sendResponse(res, {
    data: result,
    statusCode: httpStatus.OK,
    message: req.params.id
      ? "a post retrieved successfully."
      : "posts retrieved successfully.",
    success: true,
  });
});

const postController = {
  postOne,
  get,
};
export default postController;
