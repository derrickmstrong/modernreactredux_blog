import React, { useEffect } from 'react';
import UserHeader from '../UserHeader/UserHeaderContainer';

const PostList = props => {
  const { posts, getPosts } = props;

  useEffect(() => {
    getPosts();
  }, [getPosts]);
  
  if (!posts) return null

  const renderList = posts.map(({id, title, body, userId}) => {
    return (
      <div className='item' key={id}>
        <i className='large middle aligned icon user'></i>
        <div className='content'>
          <div className='description'>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <UserHeader userId={userId}/>
        </div>
      </div>
    );
  })

  return (<div className='ui relaxed divided list'>
      <h1>Post List</h1>
      {renderList}
  </div>);
};

export default PostList