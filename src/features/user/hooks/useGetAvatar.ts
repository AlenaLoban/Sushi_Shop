export function useGetAvatar() {
  const userAvatars = localStorage.getItem('userAvatars') || '';
  const isToken = localStorage.getItem('token');
  const userEmail = isToken ? atob(isToken).split(':')[0] : '';
  let userAvatar;
  
  if (userAvatars && userEmail) {
    const avatars = { ...JSON.parse(userAvatars) };
    userAvatar = avatars[userEmail];
  }
  return { userAvatar };
}
