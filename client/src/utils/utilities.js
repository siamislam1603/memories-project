export const setAuth=(auth)=>{
    localStorage.setItem('auth',JSON.stringify(auth));
}
export const clearAuth=(auth)=>{
    localStorage.removeItem('auth');
}
export const getAuth=()=>{
    return JSON.parse(localStorage.getItem('auth'));
}