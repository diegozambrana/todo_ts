export const getToken = () => {return localStorage.getItem('TOKEN_TODO');}
export const setToken = (token: string) => {localStorage.setItem('TOKEN_TODO', token);}
export const cleanToken = () => {localStorage.removeItem('TOKEN_TODO');}