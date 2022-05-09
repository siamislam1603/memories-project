import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'

function Posts() {
  const posts=useSelector((state)=>state.posts);
  return (
    <>
        <h1>Posts</h1>
        <div className="row">
            {posts.map(post=><div className="col-xs-12 col-sm-6" key={'post-'+post._id}>
                <Post post={post}/>
            </div>)}
        </div>
    </>
  )
}

export default Posts