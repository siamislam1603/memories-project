export default function buttonsClickReducer(activePost={},action){
    switch (action.type) {
        case 'post-clicked':
            return action.payload;
        default:
            return activePost;
    }
}