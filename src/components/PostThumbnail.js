import React from 'react';
import css from './PostThumbnail.module.css';
import publicUrl from 'utils/publicUrl';

function PostThumbnail(props) {
  return (
    // <div className={css.posts}>

    <div className={css.square}>
      <div className={css.content}>
        <img className={css.image} src={publicUrl(props.post.photo)} alt={props.post.id}/>
        
      </div>
        
    </div>
    // </div>

  );
}

export default PostThumbnail;
