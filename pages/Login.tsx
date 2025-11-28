import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulando login simples
    if (email && password) {
      onLogin();
      navigate('/');
    } else {
      setError('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="min-h-screen w-full bg-black relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555252333-9f8e90e6e8e1?q=80&w=2070&auto=format&fit=crop')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 md:bg-black/60 z-0"></div>
      
      {/* Navbar Logo only */}
      <div className="absolute top-0 left-0 p-6 z-10">
         <h1 className="text-4xl font-bold text-violet-600 tracking-tighter" style={{ textShadow: '0 0 10px rgba(139, 92, 246, 0.5)' }}>MAMA<span className="text-white">FLIX</span></h1>
      </div>

      <div className="relative z-10 bg-black/80 p-12 md:w-[450px] rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8">Entrar</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Email ou celular"
            className="bg-[#333] text-white p-4 rounded outline-none focus:bg-[#454545] border-b-2 border-transparent focus:border-violet-500 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Senha"
            className="bg-[#333] text-white p-4 rounded outline-none focus:bg-[#454545] border-b-2 border-transparent focus:border-violet-500 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit" 
            className="bg-violet-700 text-white font-bold py-3 rounded mt-6 hover:bg-violet-800 transition duration-200"
          >
            Acessar Aulas
          </button>
        </form>

        <div className="mt-4 flex justify-between text-gray-400 text-sm">
           <label className="flex items-center gap-1 cursor-pointer">
              <input type="checkbox" className="accent-violet-600" /> Lembrar de mim
           </label>
           <span className="hover:underline cursor-pointer">Esqueceu a senha?</span>
        </div>

        <div className="mt-16 text-gray-500">
           Ainda não é aluna? <span className="text-white hover:underline cursor-pointer">Matricule-se agora</span>.
        </div>
      </div>
    </div>
  );
};

export default Login;