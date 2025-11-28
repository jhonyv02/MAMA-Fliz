import React from 'react';
import { Play, Info } from 'lucide-react';
import { Video } from '../types';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  video: Video;
}

const Hero: React.FC<HeroProps> = ({ video }) => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[65vh] md:h-[85vh] w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
      >
         <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/40 to-transparent" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-12 pt-20 max-w-2xl">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-black bg-violet-500 rounded-sm w-fit">
          NOVIDADE
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          {video.title}
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-6 drop-shadow-md line-clamp-3">
          {video.description}
        </p>

        <div className="flex gap-4">
          <button 
            onClick={() => navigate(`/watch/${video.id}`)}
            className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-opacity-90 transition transform hover:scale-105"
          >
            <Play size={24} fill="black" /> Assistir
          </button>
          <button 
            className="flex items-center gap-2 bg-gray-500/70 text-white px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-gray-500/50 transition backdrop-blur-sm"
          >
            <Info size={24} /> Mais Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;