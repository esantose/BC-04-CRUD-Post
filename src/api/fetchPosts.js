const baseURL = "http://localhost:8080";

export const getPosts = async () => {
  const response = await fetch(`${baseURL}/posts`, { method: "GET" });
  const data = await response.json();
  return data;
};

export const createPost = async (data) => {
  await fetch(`${baseURL}/posts`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updatePost = async (data) => {
  await fetch(`${baseURL}/posts/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deletePost = async (idPost) => {
  await fetch(`${baseURL}/posts/${idPost}`, { method: "DELETE" });
};
