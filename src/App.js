import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Admin from './pages/Admin';
import Login from './pages/Login';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });
  
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('adminAuth') === 'true';
  });
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  const handleLogin = (authStatus) => {
    setIsAuthenticated(authStatus);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminUserName');
    setIsAuthenticated(false);
  };
  
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };
  
  return (
    <BrowserRouter>
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <Admin onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      
      <Footer />
      
      <button onClick={toggleTheme} className="theme-switch" aria-label="Toggle theme">
        <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
      </button>
    </BrowserRouter>
  );
}

export default App;