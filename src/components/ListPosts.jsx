import { useContext, useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import { toast } from "react-toastify";

import { PostContext } from "../context/PostContextProvider";

import {
  exitRequestAction,
  getPostsAction,
  sendRequestAction,
} from "../reducer/postActions";

import Post from "./Post";

const ListPosts = () => {
  const { postState, dispatch } = useContext(PostContext);
  const { isLoading, posts } = postState;

  const getDataPosts = async () => {
    dispatch(sendRequestAction());
    try {
      dispatch(await getPostsAction());
      toast.success("Datos cargados!!!");
    } catch (error) {
      toast.error("Error al cargar los datos");
    }
    dispatch(exitRequestAction());
  };

  useEffect(() => {
    getDataPosts();
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        sx={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}
        align="center"
      >
        Lista de Posts
      </Typography>
      <Grid container spacing={2}>
        {isLoading ? (
          <Typography variant="h5">Loading...</Typography>
        ) : (
          posts.map((post) => (
            <Grid key={post.id} item xs={6} sm={4} md={3}>
              <Post post={post} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default ListPosts;
