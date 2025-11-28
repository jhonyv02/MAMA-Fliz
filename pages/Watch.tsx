import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { getVideoById, CATEGORIES } from '../services/database';

const Watch: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const video = id ? getVideoById(id) : null;

  if (!video) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl">Vídeo não encontrado</h2>
        <Link to="/" className="mt-4 text-violet-500 hover:underline">Voltar para Início</Link>
      </div>
    );
  }

  // Find related videos (mock logic: just get the first few of the first category)
  const relatedVideos = CATEGORIES[0].videos.filter(v => v.id !== video.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#141414] flex flex-col">
      <div className="sticky top-0 z-50 p-4 bg-gradient-to-b from-black/80 to-transparent">
        <Link to="/" className="flex items-center gap-2 text-white hover:text-violet-500 transition w-fit">
          <ArrowLeft size={24} /> <span className="font-bold">Voltar</span>
        </Link>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 pb-12">
        {/* Player Container */}
        <div className="aspect-video w-full bg-black shadow-2xl rounded-lg overflow-hidden border border-gray-800">
          {video.isEmbed ? (
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video 
              src={video.videoUrl} 
              poster={video.thumbnailUrl}
              controls 
              autoPlay 
              className="w-full h-full"
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
          )}
        </div>

        {/* Info */}
        <div className="mt-6 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{video.title}</h1>
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <span>{video.year || '2024'}</span>
                    <span className="border border-gray-600 px-1 text-xs rounded">HD</span>
                    <span>{video.duration}</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">{video.description}</p>
            </div>
            
            {/* Related/Sidebar */}
            <div className="md:w-1/3 bg-[#1f1f1f] p-4 rounded-lg h-fit">
                <h3 className="text-white font-bold mb-4 border-l-4 border-violet-500 pl-2">A seguir</h3>
                <div className="flex flex-col gap-4">
                    {relatedVideos.map(rel => (
                        <Link key={rel.id} to={`/watch/${rel.id}`} className="flex gap-3 group">
                             <div className="w-32 h-20 relative flex-shrink-0">
                                <img src={rel.thumbnailUrl} alt={rel.title} className="w-full h-full object-cover rounded opacity-80 group-hover:opacity-100 transition" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <PlayCircle size={20} className="text-white opacity-0 group-hover:opacity-100 shadow-black drop-shadow-lg" />
                                </div>
                             </div>
                             <div>
                                 <h4 className="text-sm font-semibold text-gray-200 group-hover:text-violet-400 transition">{rel.title}</h4>
                                 <p className="text-xs text-gray-500 mt-1">{rel.duration}</p>
                             </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;