
import React, { useState, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminPanel from './components/AdminPanel';

// Lazy Load das páginas para performance (Code Splitting)
const Login = React.lazy(() => import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));
const Watch = React.lazy(() => import('./pages/Watch'));

// Componente de Loading simples (Spinner)
const LoadingSpinner = () => (
  <div className="min-h-screen bg-[#141414] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  // Auth state management
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('auth_token') === 'true';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [showAdmin, setShowAdmin] = useState(false);

  const handleLogin = () => {
    localStorage.setItem('auth_token', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {/* O AdminPanel agora está disponível globalmente se autenticado */}
      {isAuthenticated && showAdmin && (
        <AdminPanel onClose={() => setShowAdmin(false)} />
      )}
      
      {/* Navbar modificada para injetar o botão de Admin */}
      {/* Precisamos passar o setShowAdmin para a Navbar, mas como a Navbar está dentro da Home, 
          vamos simplificar e deixar o botão flutuante ou injetar via prop na Home */}

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route 
            path="/login" 
            element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} 
          />
          
          <Route 
            path="/" 
            element={
              isAuthenticated ? (
                <Home 
                  onLogout={handleLogout} 
                  searchQuery={searchQuery} 
                  setSearchQuery={setSearchQuery}
                  onOpenAdmin={() => setShowAdmin(true)} // Passando a função para abrir o admin
                />
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
          
          <Route 
            path="/watch/:id" 
            element={isAuthenticated ? <Watch /> : <Navigate to="/login" />} 
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
