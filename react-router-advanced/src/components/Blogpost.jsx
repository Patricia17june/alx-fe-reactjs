import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post {postId}</h2>
      {/* Fetch and display blog post content here */}
    </div>
  );
}

export default BlogPost;
