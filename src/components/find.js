export function findFollowers(userId, store) {
    const followerIds = store.followers.filter(follower => follower.userId === userId).map(follower => follower.followerId);
    return store.users.filter(user => followerIds.includes(user.id));
}

export function findFollowing(userId, store) {
    const followingIds = store.followers.filter(follower => follower.followerId === userId).map(follower => follower.userId);
    return store.users.filter(user => followingIds.includes(user.id));
}
export function findPosts(userId, store) {
    return store.posts.filter(post => post.userId === userId);
}