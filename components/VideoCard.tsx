
import React from 'react';
import { PlayCircle } from 'lucide-react';
import { Video } from '../types';
import { Link } from 'react-router-dom';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Link to={`/watch/${video.id}`} className="group relative block bg-[#141414] rounded-md overflow-hidden transition-all duration-300 hover:z-20 transform hover:scale-110 md:hover:scale-125 shadow-lg hover:shadow-violet-900/40">
      <div className="aspect-video relative">
        <img 
          src={video.thumbnailUrl} 
          alt={video.title} 
          loading="lazy" 
          width="320"
          height="180"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <PlayCircle size={48} className="text-white drop-shadow-lg" />
        </div>
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-1 rounded">
            {video.duration}
        </span>
      </div>
      
      <div className="p-3 absolute inset-x-0 -bottom-16 bg-[#1f1f1f] group-hover:bottom-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
        <h3 className="text-sm font-bold text-white truncate">{video.title}</h3>
        <p className="text-[10px] text-gray-400 line-clamp-2 mt-1">{video.description}</p>
        <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] text-green-400 font-semibold">98% Relevante</span>
            <span className="text-[10px] border border-gray-600 px-1 rounded text-gray-300">HD</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
