export default function postsReducer(posts=[],action){
    switch (action.type) {
        case 'CREATE':
            return [...posts,action.payload];
        case 'FETCH_ALL':
            return action.payload;
        case 'UPDATE':
            const updatedPosts=posts.map(post=>post._id===action.payload._id ? action.payload : post);    
            return updatedPosts;
        default:
            return posts;
    }
}