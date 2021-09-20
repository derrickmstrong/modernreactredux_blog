import React, { useEffect } from 'react';

const PostList = props => {
  const { posts, getPosts } = props;

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log(posts);
  const list = posts.map(({id, title}) => <p key={id}>{title}</p>)

  return (<div>
      <h1>Post List</h1>
      {list}
  </div>);
};

export default PostList