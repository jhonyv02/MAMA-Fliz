import React, { useState, useEffect } from 'react';
import { Search, Bell, LogOut, Menu, X, Settings } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onSearch: (query: string) => void;
  onLogout: () => void;
  onOpenAdmin?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, onLogout, onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        
        {/* Left Side: Logo & Links */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl md:text-3xl font-bold text-violet-500 uppercase tracking-tighter" style={{ textShadow: '0 0 10px rgba(139, 92, 246, 0.5)' }}>
            MAMA<span className="text-white">FLIX</span>
          </Link>
          
          <ul className="hidden md:flex gap-6 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white transition cursor-pointer font-medium">Início</Link></li>
            <li><Link to="/" className="hover:text-white transition cursor-pointer">Aulas</Link></li>
            <li><Link to="/" className="hover:text-white transition cursor-pointer">Bônus</Link></li>
          </ul>
        </div>

        {/* Right Side: Icons */}
        <div className="flex items-center gap-4 md:gap-6 text-white">
          <div className={`flex items-center border transition-all duration-300 ${showSearch ? 'w-48 px-2 border-white/50 bg-black/50' : 'w-0 border-transparent'} overflow-hidden rounded-full`}>
             <Search size={20} className="min-w-[20px] mx-1" onClick={() => setShowSearch(!showSearch)}/>
             <input 
                type="text" 
                placeholder="Pesquisar aula..." 
                className="bg-transparent border-none outline-none text-sm w-full py-1 text-white placeholder-gray-400"
                onChange={handleSearchChange}
             />
          </div>
          {!showSearch && <Search className="md:hidden cursor-pointer" size={20} onClick={() => setShowSearch(true)} />}

          <Bell size={20} className="hidden md:block cursor-pointer hover:text-violet-400 transition" />
          
          <div className="group relative">
            <img 
              src="https://picsum.photos/seed/mom/200" 
              alt="User" 
              className="w-8 h-8 rounded cursor-pointer border border-transparent group-hover:border-violet-500 transition"
            />
            <div className="absolute right-0 mt-2 w-32 bg-black border border-gray-800 rounded shadow-lg hidden group-hover:block p-2">
               {onOpenAdmin && (
                 <button onClick={onOpenAdmin} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white w-full pb-2 mb-2 border-b border-gray-800">
                    <Settings size={16} /> Admin
                 </button>
               )}
               <button onClick={onLogout} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white w-full">
                  <LogOut size={16} /> Sair
               </button>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
             {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141414] absolute top-full left-0 w-full p-4 border-t border-gray-800 flex flex-col gap-4 text-center text-gray-300">
          <Link to="/" className="hover:text-violet-500" onClick={() => setMobileMenuOpen(false)}>Início</Link>
          <Link to="/" className="hover:text-violet-500" onClick={() => setMobileMenuOpen(false)}>Aulas</Link>
          <Link to="/" className="hover:text-violet-500" onClick={() => setMobileMenuOpen(false)}>Bônus</Link>
          {onOpenAdmin && (
            <button onClick={() => { onOpenAdmin(); setMobileMenuOpen(false); }} className="hover:text-violet-500">
               Admin Panel
            </button>
          )}
          <button onClick={onLogout} className="text-red-500">Sair</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;