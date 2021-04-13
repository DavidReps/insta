import React,{ useState } from 'react';
import publicUrl from 'utils/publicUrl';
import css from './Post.module.css';
import {
    Link,
    
  } from "react-router-dom";

function Post(props){
    const [comment, setComment] = useState('');
    const [toggleComment, setToggleComment] = useState(false);

    return(
        <article>
            <img className={css.user} src={publicUrl(props.user.photo)} alt={props.user.id}/>
                    {props.user.id}
            <div>
                <img className={css.post} src={publicUrl(props.post.photo)} alt ={props.post.id}/>
            </div>
            <span >
                <button>
                {props.likes.self?
                        <img onClick={handleUnlike} src={publicUrl('/assets/unlike.svg')} alt='Unlike Action'/> :
                        <img onClick={handleLike} src={publicUrl('/assets/like.svg')} alt='Like Action'/> 
                        }
                </button>
                {' '}
                {/* <img src={publicUrl('/assets/comment.svg')} alt="Comments"/> */}
                
                <button onClick={e=>setToggleComment(!toggleComment)}>
                    <img src={publicUrl('/assets/comment.svg')} alt='Comment Action'/> 
                </button>
            </span>
            <div>
                {props.likes.count} likes
            </div>
            <div>
            {props.post.desc}
            </div>
            <div>
                {/* {props.comments.count} */}
                {comments(props.comments)}
            </div>
            <div>
                {props.post.datetime}
            </div>

        {toggleComment&&

        
            <form className={css.addComment} onSubmit={handleSubmitComment}>
                <input type="text" placeholder="Add a comment…" value={comment} onChange={e=>setComment(e.target.value)}/>
                <button type="submit">Post</button>
            </form>
        }   

        </article>
        
    );

    function handleSubmitComment(event){
        props.onComment(props.post.id, comment); // this calls addComment from App.js
        setComment(''); //reset
        setToggleComment(false); //close comment box
        event.preventDefault(); // prevent page refresh
      }

    function handleLike(){ 
        props.onLike(props.post.id);
    }
    function handleUnlike(){
        props.onUnlike(props.post.id);
    }

}export default Post;




function comments(props){
    return (
        <view>
        {props.map(comment => (
            <div>
                <Link key={comment.userId} to={`/${comment.userId}`}>
                    <strong>{comment.userId}</strong> 
                </Link>
                    {comment.text}
            </div>
        ))}
           </view>
    
    );
    
}
