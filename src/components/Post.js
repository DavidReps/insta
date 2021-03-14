import React from 'react';
import publicUrl from 'utils/publicUrl';
import css from './Post.module.css';



function Post(props){
    return(
        <view>
            <img className={css.user} src={publicUrl("/assets/user1.png")} alt={props.user.id}/>
            {props.user.id}
            
            <div>
                <img className={css.post} src={publicUrl("/assets/post1.png")} alt ={props.post.id}/>
            </div>
            <div>
                <img src={publicUrl('/assets/activity.svg')} alt="Likes"/>
                <img src={publicUrl('/assets/comment.svg')} alt="Comments"/>
            </div>
                {props.likes.count} likes

            <div>
            {props.post.desc}


            </div>

            <div>
                {comments(props.comments)}

            </div>
                
    

        </view>
 
        
    );

}export default Post;


function comments(props){
    return (
        <div>
        {props.map(comment => (
          <p><strong>{comment.userId}</strong> {comment.text}</p>
        ))}
      </div>
    );
    
}
// {props.map((comments) => (
//     const comment = comments.userId[0] + comments.text[0];


//     )}