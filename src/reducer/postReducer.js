export const initialState = {
  posts: [],
  singlePost: null,
  error: null,
  success: null,
  isLoading: true,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "SEND_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "EXIT_REQUEST":
      return {
        ...state,
        isLoading: false,
      };
    case "GET_POSTS":
      return {
        ...state,
        posts: [...action.payload],
      };
    case "CREATE_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
        singlePost: null,
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case "SET_POST":
      return {
        ...state,
        singlePost: { ...action.payload },
      };
    default:
      return state;
  }
};
