import React, {createContext, useState, useEffect} from 'react';
import uniqueId from 'utils/uniqueId.js';
import initialStore from 'utils/initialStore.js';
import 'firebase/auth';
import firebase from 'firebase';
import 'firebase/database';
import { useHistory } from 'react-router-dom'

export const StoreContext = createContext(); 



const firebaseConfig = {
  apiKey: "AIzaSyCK-g0tYjarPtcQBYhdBxAg2XEeg6jZAmg",
  authDomain: "bcinsta-8c8f5.firebaseapp.com",
  projectId: "bcinsta-8c8f5",
  storageBucket: "bcinsta-8c8f5.appspot.com",
  messagingSenderId: "949333086754",
  appId: "1:949333086754:web:cd09454e7b4c87cccb307b"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();



function StoreContextProvider(props){
  console.log('enter');


  const [currentUserId, setCurrentUserId] = useState('judy'); 
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [comments, setComments] = useState([]);

  let history = useHistory();

  let temp = JSON.parse(window.localStorage.getItem('store')) || initialStore;

  function login(email, password){
    auth.signInWithEmailAndPassword(email,password).then((response)=>{
      db.collection('users')
	      .where('email','==', response.user.email)
	        .get().then(snapshot=>{
            setCurrentUserId(snapshot.docs[0].data().id);
          })
          history.push('/');

    }).catch(error=>{
      setCurrentUserId(null);
      // fail
    });
  }


  function signup(email, password, bio, id, name, photo){
    const user = {
      email, id, name, bio, photo
    };
    auth.createUserWithEmailAndPassword(email, password).then(()=>{
      // add a user to the firestore database
      db.collection('users').add(user);
      // add a user to the app state
      setUsers(users.concat(user));
      // set the user as a current user 
      setCurrentUserId(id);
      // route to home
      history.push('/');
  
    })
  }

  useEffect(()=>{// initialization
    db.collection('users').get().then(snapshot=>{
      const users = snapshot.docs.map(d=>d.data());
      setUsers(users);
    });
    db.collection('posts').get().then(snapshot=>{
      const posts = snapshot.docs.map(d=>d.data());
      setPosts(posts);
    });
    db.collection('followers').get().then(snapshot=>{
      const followers = snapshot.docs.map(d=>d.data());
      setFollowers(followers);
    }); 
    db.collection('likes').get().then(snapshot=>{
      const likes = snapshot.docs.map(d=>d.data());
      setLikes(likes);
    });    
    db.collection('comments').get().then(snapshot=>{
      const comments = snapshot.docs.map(d=>d.data());
      setComments(comments);
    }); 
  }, []); 
  

    function addLike(postId) {
      const like = {
        userId: currentUserId,
        postId,
        datetime: new Date().toISOString()
      };
      setLikes(likes.concat(like));
      db.collection('likes').add(like);
    }


    function removeLike(postId) {
      setLikes(likes.filter(like => !(like.userId === currentUserId && like.postId === postId)));

      db.collection('likes')
        .where('userId', '==', currentUserId)
        .where('postId', '==', postId)
        .get()
        .then(snapshot=>snapshot.forEach(doc=>doc.ref.delete()));
    }
  
    function addComment(postId, text) {
      const comment = {
        userId: currentUserId,
        postId,
        text,
        datetime: new Date().toISOString()
      };
      setComments(comments.concat(comment));
      db.collection('comments').add(comment);
    }


    function addPost(photo, desc) {
      const post = {
        id: uniqueId("post"),
        userId: currentUserId,
        photo,
        desc,
        datetime: new Date().toISOString()
      };
      setPosts(posts.concat(post));
      db.collection('posts').add(post);
  
    }
  
    function addFollower(userId, followerId) {
      const follower = {
        followerId: followerId,
        userId: userId,
      }
      setFollowers(followers.concat(follower));
      db.collection('followers').add(follower);
 
    }


    function removeFollower(userId, followerId) {

      setFollowers(followers.filter(follower => !(follower.followerId === currentUserId && follower.userId === userId)));
      db.collection('followers').where('userId', '==', userId).where('followerId', '==', currentUserId).get().then(snapshot => snapshot.forEach(doc => doc.ref.delete()));
    }
  

	return (
        <StoreContext.Provider value = {{signup, login, followers, likes,comments,posts,users, currentUserId, addComment, addFollower, addLike, addPost, removeLike, removeFollower}}>
            {props.children}
        </StoreContext.Provider>
    );
}
export default StoreContextProvider; // export this component as default 