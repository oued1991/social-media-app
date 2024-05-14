import React from 'react';
import Post from './Post';


function Feed({ posts }) {
    return (
      <div>
        <h2>Feed</h2>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    );
}

export default Feed;