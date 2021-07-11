import React, { useState } from "react";

// create context object
const BlogContext = React.createContext();

// NOTE provider allows to share some value directly to some deeply nested child
export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]); // set state
  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };
  const editBlogPost = () => {};
  const deleteBlogPost = () => {};

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
