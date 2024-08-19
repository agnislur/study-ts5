interface User {
    username: string;
    password: string;
    email: string; 
  }
  
  const users: User[] = [
    {
      username: 'admin',
      password: '123',
      email: 'admin@example.com',
    },
    {
      username: 'user1',
      password: 'mypassword',
      email: 'user1@example.com',
    },
  ];
  
  export default users;
  