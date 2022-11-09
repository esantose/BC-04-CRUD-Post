import { useContext } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { toast } from "react-toastify";

import { PostContext } from "../context/PostContextProvider";
import { deletePostsAction, setSinglePostAction } from "../reducer/postActions";

const Post = ({ post }) => {
  const { dispatch } = useContext(PostContext);
  const { title, author, id } = post;

  const handleClickDelete = async () => {
    try {
      dispatch(await deletePostsAction(id));
      toast.success("Post eliminado correctamente!!!");
    } catch (error) {
      toast.error("Error al eliminar el post");
    }
  };

  const handleClickEdit = () => {
    dispatch(setSinglePostAction(post));
  };

  return (
    <Paper
      elevation={1}
      sx={{
        padding: "1rem 0",
        backgroundColor: "lightblue",
        position: "relative",
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          position: "absolute",
          padding: "0 1rem",
          top: "1rem",
        }}
      >
        <Delete onClick={handleClickDelete} className="icon icon-delete" />
        <Edit onClick={handleClickEdit} className="icon icon-edit" />
      </Grid>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontSize: "1.3rem", marginBottom: "1rem" }}
      >
        {title}
      </Typography>
      <Typography align="center">{author}</Typography>
    </Paper>
  );
};

export default Post;
