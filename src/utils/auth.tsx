export const getToken = () => localStorage.getItem('TOKEN_TODO');
export const setToken = (token: string) => {
  localStorage.setItem('TOKEN_TODO', token);
};
export const setRefresh = (token: string) => {
  localStorage.setItem('REFRESH_TODO', token);
};
export const getRefresh = () => localStorage.getItem('REFRESH_TODO');
export const cleanToken = () => {
  localStorage.removeItem('TOKEN_TODO');
  localStorage.removeItem('REFRESH_TODO');
};
