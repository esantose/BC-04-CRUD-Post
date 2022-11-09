import { useContext, useEffect, useState } from "react";
import {
  Typography,
  Box,
  FormControl,
  Input,
  InputLabel,
  Grid,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";

import { PostContext } from "../context/PostContextProvider";

import { createPostsAction, updatePostAction } from "../reducer/postActions";

const FormPosts = () => {
  const { postState, dispatch } = useContext(PostContext);
  const { singlePost } = postState;
  const [data, setData] = useState({ title: "", author: "" });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([data.title, data.author].includes("")) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      if (!singlePost) {
        const uid = Date.now() + Math.random().toString(16).slice(10);
        dispatch(await createPostsAction({ id: uid, ...data }));
      } else {
        dispatch(await updatePostAction({ id: singlePost.id, ...data }));
      }
      toast.success(
        `Post ${singlePost ? "editado" : "creado"} correctamente!!!`
      );
      setData({ title: "", author: "" });
    } catch (error) {
      toast.error("Error al crear el post");
    }
  };

  useEffect(() => {
    if (singlePost) {
      setData({
        title: singlePost.title,
        author: singlePost.author,
      });
    }
  }, [singlePost]);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography
        variant="h2"
        sx={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}
        align="center"
      >
        {singlePost ? "Edite" : "Inserte"} un Post
      </Typography>
      <Grid
        container
        direction="column"
        sx={{ gap: "1rem", marginBottom: "2rem" }}
      >
        <FormControl variant="standard">
          <InputLabel>Title</InputLabel>
          <Input
            onChange={handleChange}
            placeholder="Ejm: Post 1"
            value={data.title}
            name="title"
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel>Author</InputLabel>
          <Input
            onChange={handleChange}
            placeholder="Ejm: José Fernando"
            value={data.author}
            name="author"
          />
        </FormControl>
      </Grid>
      <Button type="submit" variant="contained" fullWidth>
        {singlePost ? "Editar" : "Insertar"}
      </Button>
    </Box>
  );
};

export default FormPosts;
