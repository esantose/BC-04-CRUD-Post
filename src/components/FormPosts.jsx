import { useEffect, useState } from "react";

import { createPost, updatePost } from "../api/fetchPosts";

const FormPosts = (props) => {
  const { setPosts, singlePost, setSinglePost } = props;
  const [data, setData] = useState({
    title: "",
    author: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.title === "" || data.author === "") {
      setError("Es obligatorio llenar todos los campos");

      setTimeout(() => {
        setError(null);
      }, 5000);
      return;
    }

    // Enviar
    try {
      if (!singlePost) {
        /* crear */
        const uid = Date.now() + Math.random().toString(16).slice(10);
        await createPost({ id: uid, ...data });
        setPosts((prev) => [...prev, { id: uid, ...data }]);
      } else {
        /* editar */
        await updatePost({ id: singlePost.id, ...data });
        setPosts((prev) =>
          prev.map((post) => {
            if (post.id === singlePost.id) {
              return { id: singlePost.id, ...data };
            }
            return post;
          })
        );
        setSinglePost(null);
      }
      setData({ title: "", author: "" });
      setSuccess(`Post ${singlePost ? "editado" : "creado"} correctamente`);
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    } catch (error) {
      setError("Error al crear el post");
      setTimeout(() => {
        setError(null);
      }, 5000);
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
    <form className="form__posts" onSubmit={handleSubmit}>
      <h2>{singlePost ? "Edita" : "Inserta"} un Post</h2>
      {/* {error && <p>Error</p>} */}
      {error ? <p className="form__posts__error">{error}</p> : null}
      {success ? <p className="form__posts__success">{success}</p> : null}
      <div className="form_field">
        <label>Titulo:</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Ejm: Post Titulo"
          name="title"
          value={data.title}
        />
      </div>
      <div className="form_field">
        <label>Author:</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Ejm: José Fernando"
          name="author"
          value={data.author}
        />
      </div>
      <button type="submit">{singlePost ? "Editar" : "Insertar"}</button>
    </form>
  );
};

export default FormPosts;

const arry = [
  { id: 1, desc: "algo" },
  { id: 2, desc: "algo2" },
];
