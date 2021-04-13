import React, { useContext } from 'react';
import { StoreContext } from 'contexts/StoreContext';
import css from "./Profile.module.css";
import { useParams } from "react-router-dom";
import PostThumbnail from "./PostThumbnail";
import { Link } from "react-router-dom";
import publicUrl from 'utils/publicUrl';


function Profile(props) {
  // const { store } = StoreContext;
  let {
    posts, users, currentUserId, addFollower, removeFollower,followers,

  } = useContext(StoreContext);

  let { userId } = useParams(); // the variable name has to match the parameter name
  userId = userId ? userId : currentUserId;
  const user = users.find(u => u.id === userId);
  // const posts = posts.filter(p => p.userId === userId);
  const {posts:allPosts} = useContext(StoreContext);
  // const followers = followers.filter(f => f.userId === userId);
  const following = followers.filter(f => f.followerId === userId);



  function handleFollow() {
    addFollower(userId, currentUserId);
  }
  function handleUnfollow() {
    removeFollower(userId, currentUserId);
  }


  //   function addFollower(userId, followerId) {
  //   console.log(userId, followerId);
  //   setStore({
  //     ...store,
  //     followers: followers.concat({ userId, followerId })
  //   });
  // }
  // function removeFollower(userId, followerId) {
  //   setStore({
  //     ...store,
  //     followers: store.followers.filter(
  //       f => f.userId !== userId && f.followerId !== followerId
  //     )
  //   });
  // }

  return (
    <div>
      <header className={css.header}>
        <div className={css.photo}>
          <img src={publicUrl(user.photo)} alt="Profile" />
        </div>
        <div className={css.id}>
          <span>{userId}</span>
          {userId !== currentUserId && (
            <div>
              {followers.some(f => f.followerId === currentUserId) ? (
                <button className={css.unfollowBtn} onClick={handleUnfollow}>
                  Unfollow
                </button>
              ) : (
                <button className={css.followBtn} onClick={handleFollow}>
                  Follow
                </button>
              )}
            </div>
          )}
        </div>
      </header>
      <div className={css.user}>
        <div className={css.name}>{user.name}</div>
        <div className={css.bio}>{user.bio}</div>
      </div>
      <ul className={css.activity}>
        <li>
          <span>{posts.length}</span>
          <br />
          posts
        </li>
        <li>
          <span>{followers.length}</span>
          <br />
          followers
        </li>
        <li>
          <span>{following.length}</span>
          <br />
          following
        </li>
      </ul>
      <div className={css.posts}>
        {posts.map(post => (
          <Link key={post.id} to={`/${post.id}`}>
            <PostThumbnail post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Profile;
