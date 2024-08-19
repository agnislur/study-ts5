
export const validateForm = (
    username: string,
    email: string,
    nohp: string,
    password: string
  ): boolean => {
    if (!username || !email || !nohp || !password) {
      return false;
    }
    return true;
  };
  
  // Fungsi untuk mereset form
  export const resetForm = (
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setNohp: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setUsername('');
    setEmail('');
    setNohp('');
    setPassword('');
  };
  