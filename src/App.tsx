import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

import component from './components';
import pages from './pages';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/RegisterForm' && location.pathname !== '/' && <component.component.Navbar />}
      <Routes>
        <Route path="/" element={<pages.page.login />} />
        <Route path="/RegisterForm" element={<pages.page.RegisterForm />} />
        <Route path="/home" element={<pages.page.home />} />
        <Route path="/about" element={<pages.page.about />} />
        <Route path="/errorpage" element={<pages.page.ErrorPage />} />
        <Route path="/profile" element={<pages.page.Profile />} />


      </Routes>
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>
);

export default AppWrapper;
