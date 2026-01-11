import { createReducer } from "@reduxjs/toolkit";
import { createBlog, getAllBlogs, addComment } from "../../Index/blogIndex/blogIndex";

const initialState = {
  blogs: [],            // all blogs
  loading: false,        // loading state
  error: null,           // error message
  popup: null,           // popup message
  createdBlog: null,     // last created blog
  comments: {},          // store comments by blogId
  userId: null,          // store userId of logged-in user for blog creation
};

const blogReducer = createReducer(initialState, (builder) => {
  builder
    // 🟩 CREATE BLOG
    .addCase(createBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(createBlog.fulfilled, (state, action) => {
      state.loading = false;
      const newBlog = action.payload.blog || action.payload;

      // save userId who created the blog (if available)
      if (newBlog.userId) {
        state.userId = newBlog.userId;
      }

      state.createdBlog = newBlog;
      state.blogs.push(newBlog);
      state.popup = "Blog created successfully!";
    })
    .addCase(createBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to create blog";
      state.popup = "Failed to create blog";
    })

    // 📚 GET ALL BLOGS
    .addCase(getAllBlogs.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getAllBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload.blogs || action.payload;
      state.popup = null;
    })
    .addCase(getAllBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to load blogs";
      state.popup = "Failed to load blogs";
    })

    // 💬 ADD COMMENT
    .addCase(addComment.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(addComment.fulfilled, (state, action) => {
      state.loading = false;
      const { blogId, comment } = action.payload;
      if (!state.comments[blogId]) {
        state.comments[blogId] = [];
      }
      state.comments[blogId].push(comment || action.payload);
      state.popup = "Comment added successfully!";
    })
    .addCase(addComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to add comment";
      state.popup = "Failed to add comment";
    });
});

export default blogReducer;
