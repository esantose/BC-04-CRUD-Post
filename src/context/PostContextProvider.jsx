import { createContext, useReducer } from "react";

import { initialState, postReducer } from "../reducer/postReducer";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [postState, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider
      value={{
        postState,
        dispatch,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
