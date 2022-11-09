import { useState } from "react";

import "./App.css";

import FormPosts from "./components/FormPosts";
import ListaPosts from "./components/ListaPosts";

function App() {
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState(null);

  return (
    <div className="App">
      <ListaPosts
        posts={posts}
        setPosts={setPosts}
        setSinglePost={setSinglePost}
      />
      <FormPosts
        setPosts={setPosts}
        singlePost={singlePost}
        setSinglePost={setSinglePost}
      />
    </div>
  );
}

export default App;
