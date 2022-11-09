import { deletePost } from "../api/fetchPosts";

const Post = (props) => {
  const { author, title, id } = props.post;

  const handleClickDelete = async () => {
    try {
      await deletePost(id);
      props.setPosts((prev) => prev.filter((post) => post.id !== id));
      // props.deletePostById(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickEdit = () => {
    props.setSinglePost({ ...props.post });
  };

  return (
    <article className="post__card">
      <button onClick={handleClickEdit} className="btn-card edit">
        Edit
      </button>
      <button onClick={handleClickDelete} className="btn-card delete">
        Delete
      </button>
      <h4>{title}</h4>
      <p>{author}</p>
    </article>
  );
};

export default Post;
