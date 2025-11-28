import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Category } from '../types';
import VideoCard from './VideoCard';

interface RowProps {
  category: Category;
}

const Row: React.FC<RowProps> = ({ category }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (category.videos.length === 0) return null;

  return (
    <div className="mb-8 pl-4 md:pl-12 group relative">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4 transition hover:text-violet-400 cursor-pointer inline-block">
        {category.title}
      </h2>
      
      <div className="relative">
        <div 
            className={`absolute top-0 bottom-0 left-0 bg-black/50 z-40 w-12 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:bg-black/70 ${!isMoved && 'hidden'}`}
            onClick={() => handleClick('left')}
        >
            <ChevronLeft size={32} className="text-white" />
        </div>

        <div 
          ref={rowRef}
          className="flex items-center gap-4 overflow-x-scroll no-scrollbar py-8 px-2 -ml-2 scroll-smooth"
        >
          {category.videos.map((video) => (
            <div key={video.id} className="min-w-[200px] md:min-w-[240px] lg:min-w-[280px]">
              <VideoCard video={video} />
            </div>
          ))}
        </div>

        <div 
            className="absolute top-0 bottom-0 right-0 bg-black/50 z-40 w-12 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:bg-black/70"
            onClick={() => handleClick('right')}
        >
            <ChevronRight size={32} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Row;