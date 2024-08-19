import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const user = JSON.parse(storedUserData);

      if (user.username === username && user.password === password) {
        setUser({ username: user.username, email: user.email, nohp: user.nohp, umur: user.umur });
        navigate('/home'); // Redirect ke halaman home setelah login
      } else {
        setError('Invalid username or password');
      }
    } else {
      setError('No registered user found.');
    }
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-sky-500 text-white p-2 rounded mt-4 w-full hover:bg-sky-700">
            <h1 className="text-center">Login</h1>
          </button>
        </form>
        <div className="text-center mt-4">
          <span>Don't have an account? </span>
          <Link to="/RegisterForm" className="text-blue-500 hover:underline">Register</Link>
        </div>
      </div>
    </div>

  );
};

export default Login;
