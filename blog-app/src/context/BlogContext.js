import React, { useReducer } from "react";

// create context object
const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

// NOTE provider allows to share some value directly to some deeply nested child
export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []); // reducer func, initial state

  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
