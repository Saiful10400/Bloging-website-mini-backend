import { Router } from "express";
import postController from "./post.controller";

const router = Router();

//1. create one.
router.post("/", postController.postOne);

//2. get post.
router.get("/", postController.get);

//3.update post by id
router.patch("/:id", postController.update);

const postRoute = router;
export default postRoute;
 