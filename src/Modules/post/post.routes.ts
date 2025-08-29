import { Router } from "express";
import postController from "./post.controller";

const router = Router();

//1. create one.
router.post("/", postController.postOne);

//2. get post.
router.get("/", postController.get);

const postRoute = router;
export default postRoute;
 