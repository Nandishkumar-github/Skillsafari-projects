import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { auth } from '../firebase-config';

function Home({isAuth}) {
  const [postList, setPostList] = useState([]);
  const pcr = collection(db, "Posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(pcr)
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "Posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className='hp'>{postList.map((post) => {
      return (
      <div className='post'>
      <div className='ph'>
        <div className='title'>
          <h1>{post.title}</h1>
        </div>
        <div className='dp'>
          {isAuth && post.author.id === auth.currentUser.uid && (
          <button 
          onClick={() => {
            deletePost(post.id);
          }}
          >
            &#128465;
            </button>
            )}
        </div>
      </div>
      <div className='ptc'>{post.postText}</div>
      <h3>@{post.author.name}</h3>
      </div>
    );
    })}
    </div>
  );
}

export default Home;