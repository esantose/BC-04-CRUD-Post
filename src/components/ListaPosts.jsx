import { useEffect, useState } from "react";
import { getPosts } from "../api/fetchPosts";
import Post from "./Post";

// const ListaPosts = ({ posts, setPosts, setSinglePost }) => {
const ListaPosts = (props) => {
  const { posts, setPosts, setSinglePost } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getDataPosts = async () => {
    setIsLoading(true);
    try {
      const data = await getPosts();
      setPosts([...data]);
    } catch (error) {
      setError("Error al cargar los datos");
    }
    setIsLoading(false);
  };

  // const deletePostById = (id) => {
  //   setPosts((prev) => prev.filter((post) => post.id !== id));
  // };

  useEffect(() => {
    getDataPosts();
  }, []);

  return (
    <div className="list__posts">
      <h2>ListaPosts</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : !error ? (
        <div className="list__posts_container">
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              setPosts={setPosts}
              setSinglePost={setSinglePost}
              // deletePostById={deletePostById}
            />
          ))}
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default ListaPosts;
