import { Router } from "express";

import postRoute from "../Modules/post/post.routes";

const routes = Router();

const moduleRoutes = [
  {
    path: "/post",
    route: postRoute,
  },
];

moduleRoutes.forEach((item) => routes.use(item.path, item.route));

export default routes;
