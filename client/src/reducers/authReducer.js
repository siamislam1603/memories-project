import { clearAuth, getAuth, setAuth } from "../utils/utilities";

export default function authReducer(auth=null,action){
    switch (action.type) {
        case 'auth':
            return action.payload;
        case 'user_login':
            setAuth(action.payload);
            return action.payload;
        case 'user_logout':
            clearAuth();
            return null;
        default:
            return getAuth();
    }
}