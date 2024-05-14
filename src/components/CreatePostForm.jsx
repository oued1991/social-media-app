import React, { useState } from 'react';

function CreatePostForm({ addPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (title.trim() !== '' && content.trim() !== '') {
        addPost({ title, content, likes: 0, comments: [] });
        setTitle('');
        setContent('');
      }
    };
  
    return (
      <div>
        <h2>Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <br />
          <label>
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default CreatePostForm;