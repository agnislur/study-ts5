
export const saveUserData = (userData: {
    username: string;
    email: string;
    nohp: string;
    password: string;
  }) => {
    localStorage.setItem('userData', JSON.stringify(userData));
  };
  