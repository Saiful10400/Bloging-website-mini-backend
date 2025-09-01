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

  if (req.query.id && typeof req.query.id === "string") {
    result = await postService.getOneById(req.query.id);
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

//3. update a post by id
const update = catchAsync(async (req: Request, res: Response) => {
  if (req.params.id && typeof req.params.id === "string") {
    const result = await postService.updateOneById(req.params.id, req.body);
    sendResponse(res, {
      data: result,
      statusCode: httpStatus.OK,
      message: "post updated successfully.",
      success: true,
    });
  }
});

const postController = {
  postOne,
  get,
  update,
};
export default postController;
