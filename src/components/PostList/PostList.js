import React, { useEffect } from 'react';

// class PostList extends React.Component {

//     componentDidMount() {
//         // call action creater (fetchPosts) the moment the PostList is rendered to the screen
//         this.props.fetchPosts()
//     }

//     render() {
//         console.log(this.props.posts)

//         return (
//             <div>
//                 Post List
//             </div>
//         )
//     }
// }

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