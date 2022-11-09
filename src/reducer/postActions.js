import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../api/fetchPosts";

export const sendRequestAction = () => {
  return { type: "SEND_REQUEST" };
};

export const exitRequestAction = () => {
  return { type: "EXIT_REQUEST" };
};

export const getPostsAction = async () => {
  const data = await getPosts();
  return { type: "GET_POSTS", payload: data };
};

export const createPostsAction = async (data) => {
  await createPost(data);
  return { type: "CREATE_POST", payload: data };
};
export const updatePostAction = async (data) => {
  await updatePost(data);
  return { type: "UPDATE_POST", payload: data };
};

export const deletePostsAction = async (idPost) => {
  await deletePost(idPost);
  return { type: "DELETE_POST", payload: idPost };
};

export const setSinglePostAction = (post) => {
  return { type: "SET_POST", payload: post };
};
