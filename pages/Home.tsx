import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Row from '../components/Row';
import { FEATURED_VIDEO, CATEGORIES } from '../services/database';
import { Video } from '../types';

interface HomeProps {
  onLogout: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onOpenAdmin?: () => void;
}

const Home: React.FC<HomeProps> = ({ onLogout, searchQuery, setSearchQuery, onOpenAdmin }) => {
  // Simple search filter logic
  const filteredCategories = searchQuery 
    ? CATEGORIES.map(cat => ({
        ...cat,
        videos: cat.videos.filter(v => v.title.toLowerCase().includes(searchQuery.toLowerCase()))
      })).filter(cat => cat.videos.length > 0)
    : CATEGORIES;

  return (
    <div className="min-h-screen bg-[#141414] overflow-x-hidden">
      <Navbar onSearch={setSearchQuery} onLogout={onLogout} onOpenAdmin={onOpenAdmin} />
      
      {!searchQuery && <Hero video={FEATURED_VIDEO} />}
      
      <div className={`relative z-20 ${!searchQuery ? '-mt-24 md:-mt-48' : 'mt-24'}`}>
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <Row key={cat.id} category={cat} />
          ))
        ) : (
          <div className="h-[50vh] flex flex-col items-center justify-center text-gray-500">
            <p className="text-2xl">Nenhum resultado encontrado para "{searchQuery}"</p>
          </div>
        )}
      </div>

      <footer className="w-full text-center text-gray-500 py-8 text-sm mt-12 border-t border-gray-900">
        <p>© 2024 NeonStream Classes. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4 mt-2">
            <span className="cursor-pointer hover:underline">Termos de Uso</span>
            <span className="cursor-pointer hover:underline">Privacidade</span>
            <span className="cursor-pointer hover:underline">Contato</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;