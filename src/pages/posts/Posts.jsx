import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllPosts, postAdd } from "../../asyncThunks/postThunk";

const Posts = () => {
  const { posts, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllPosts());
  }, []);
    
    const addPostHandler = () => { 
        const post = {
            title: 'some title 1',
            content: 'dsvfdghs dgfdfg'
        };

        dispatch(postAdd(post));
    }

  if (loading) {
    return "Loading....";
  }

  if (error) {
    return error;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={addPostHandler}>Add Post</button>

      {posts.map((post) => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Posts;
