
import React, {useState} from 'react';
import Comment from './Comment';


function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>
        Likes: {likes}
        <button onClick={handleLike}>Like</button>
      </p>
      <h4>Comments:</h4>
      {post.comments.map((comment, index) => (
        <Comment key={index} content={comment} />
      ))}
    </div>
  );
}


export default Post 