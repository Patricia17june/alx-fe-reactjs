import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post {postId}</h2>
      <p>welcome to my blogpost with ID: {id}</p>
    </div>
  );
}

export default BlogPost;
