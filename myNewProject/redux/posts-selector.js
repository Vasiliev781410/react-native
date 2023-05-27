export const selectPosts = (state) => {
    console.log("state.posts ",state.posts); 
    return state.posts.items;
};