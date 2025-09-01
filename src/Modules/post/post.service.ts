import { Tpost } from "./post.interface";
import postModel from "./post.model";

//1. create a post.
const createOne = async (payload: Tpost) => {
  const result = await postModel.create(payload);
  return result;
};

//2. get a post by id
const getOneById = async (id: string): Promise<Tpost | null> => {
  const result = await postModel.findById(id);
  return result;
};

//3. get all posts
const getAll = async (): Promise<Tpost[]> => {
  const result = await postModel.find();
  return result;
};

//4. update a post by id
const updateOneById = async (id: string, payload: Partial<Tpost>) => {
  const result = await postModel.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const postService = { createOne, getOneById, getAll, updateOneById };
export default postService;
