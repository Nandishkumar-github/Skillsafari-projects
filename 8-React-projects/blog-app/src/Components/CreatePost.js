import React, { useState, useEffect} from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function CreatePost(isAuth) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const pcr = collection(db, "Posts");
  const navigate = useNavigate();

  const createPost = async () => {
  await addDoc(pcr, {title, postText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
  });
  navigate("/");
  };

  useEffect(() => {
    if(!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <div className='cpp'>
      <div className='cpc'>
        <h1>Create A Post</h1>
        <div className='inputGp'>
          <label>Title:</label>
          <input placeholder='Title...' onChange={(e) => {setTitle(e.target.value)}}/>
        </div>
        <div className='inputGp'>
          <label>Post:</label>
          <textarea placeholder='Write your post here...' onChange={(e) => {setPostText(e.target.value)}}/>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost;