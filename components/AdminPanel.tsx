import React, { useState } from 'react';
import { X, Plus, Trash2, Save, Copy, RotateCcw, ChevronDown, ChevronRight } from 'lucide-react';
import { Category, Video } from '../types';
import { CATEGORIES, saveData, resetData } from '../services/database';

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const [categories, setCategories] = useState<Category[]>(JSON.parse(JSON.stringify(CATEGORIES)));
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [jsonExport, setJsonExport] = useState('');

  const handleSave = () => {
    saveData(categories);
    alert('Alterações salvas! A página será recarregada.');
    window.location.reload();
  };

  const handleReset = () => {
    if (confirm('Tem certeza? Isso apagará todas as suas edições e voltará ao padrão original.')) {
      resetData();
      window.location.reload();
    }
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(categories, null, 2);
    setJsonExport(dataStr);
    navigator.clipboard.writeText(dataStr);
    alert('JSON copiado para a área de transferência! Você pode colar isso no arquivo services/database.ts para salvar permanentemente.');
  };

  // Category Actions
  const addCategory = () => {
    const newCat: Category = {
      id: `mod-${Date.now()}`,
      title: 'Novo Módulo',
      videos: []
    };
    setCategories([...categories, newCat]);
    setExpandedCategory(newCat.id);
  };

  const updateCategory = (id: string, title: string) => {
    setCategories(categories.map(c => c.id === id ? { ...c, title } : c));
  };

  const deleteCategory = (id: string) => {
    if (confirm('Deletar este módulo e todas as aulas dele?')) {
      setCategories(categories.filter(c => c.id !== id));
    }
  };

  // Video Actions
  const addVideo = (catId: string) => {
    const newVideo: Video = {
      id: `aula-${Date.now()}`,
      title: 'Nova Aula',
      description: 'Descrição da aula...',
      thumbnailUrl: 'https://picsum.photos/400/225',
      videoUrl: '',
      duration: '10 min',
      isEmbed: false
    };
    setCategories(categories.map(c => {
      if (c.id === catId) {
        return { ...c, videos: [...c.videos, newVideo] };
      }
      return c;
    }));
  };

  const updateVideo = (catId: string, vidId: string, field: keyof Video, value: any) => {
    setCategories(categories.map(c => {
      if (c.id === catId) {
        const newVideos = c.videos.map(v => v.id === vidId ? { ...v, [field]: value } : v);
        return { ...c, videos: newVideos };
      }
      return c;
    }));
  };

  const deleteVideo = (catId: string, vidId: string) => {
    setCategories(categories.map(c => {
      if (c.id === catId) {
        return { ...c, videos: c.videos.filter(v => v.id !== vidId) };
      }
      return c;
    }));
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex justify-end">
      <div className="w-full md:w-[600px] h-full bg-[#1a1a1a] flex flex-col border-l border-gray-800 shadow-2xl">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-[#141414]">
          <div>
            <h2 className="text-xl font-bold text-violet-500">Gerenciar Aulas</h2>
            <p className="text-xs text-gray-500">Edite aqui e clique em Salvar</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-full text-white">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {categories.map((cat) => (
            <div key={cat.id} className="bg-[#222] rounded-lg border border-gray-800 overflow-hidden">
              <div 
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-[#2a2a2a] transition"
                onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
              >
                <div className="flex items-center gap-2 flex-1">
                  {expandedCategory === cat.id ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronRight size={16} className="text-gray-400" />}
                  <input 
                    className="bg-transparent border-none text-white font-bold w-full focus:outline-none focus:ring-1 ring-violet-500 rounded px-1"
                    value={cat.title}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => updateCategory(cat.id, e.target.value)}
                  />
                </div>
                <button onClick={(e) => { e.stopPropagation(); deleteCategory(cat.id); }} className="text-red-500 hover:text-red-400 p-1">
                  <Trash2 size={16} />
                </button>
              </div>

              {expandedCategory === cat.id && (
                <div className="bg-[#1a1a1a] p-4 border-t border-gray-800 space-y-4">
                  {cat.videos.map((video) => (
                    <div key={video.id} className="bg-[#252525] p-4 rounded border border-gray-700">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs text-violet-400 font-mono">ID: {video.id}</span>
                        <button onClick={() => deleteVideo(cat.id, video.id)} className="text-red-500 hover:text-red-400">
                          <Trash2 size={14} />
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-3">
                        <input 
                          className="bg-[#333] text-white text-sm p-2 rounded border border-gray-600 focus:border-violet-500 outline-none"
                          placeholder="Título da Aula"
                          value={video.title}
                          onChange={(e) => updateVideo(cat.id, video.id, 'title', e.target.value)}
                        />
                         <textarea 
                          className="bg-[#333] text-white text-sm p-2 rounded border border-gray-600 focus:border-violet-500 outline-none"
                          placeholder="Descrição"
                          rows={2}
                          value={video.description}
                          onChange={(e) => updateVideo(cat.id, video.id, 'description', e.target.value)}
                        />
                        <div className="grid grid-cols-2 gap-2">
                            <input 
                              className="bg-[#333] text-white text-xs p-2 rounded border border-gray-600 focus:border-violet-500 outline-none"
                              placeholder="Duração (ex: 10 min)"
                              value={video.duration}
                              onChange={(e) => updateVideo(cat.id, video.id, 'duration', e.target.value)}
                            />
                            <div className="flex items-center gap-2 bg-[#333] px-2 rounded border border-gray-600">
                                <input 
                                  type="checkbox"
                                  checked={video.isEmbed}
                                  onChange={(e) => updateVideo(cat.id, video.id, 'isEmbed', e.target.checked)}
                                  className="accent-violet-500"
                                />
                                <span className="text-xs text-gray-300">É Embed/Iframe?</span>
                            </div>
                        </div>
                        <input 
                          className="bg-[#333] text-white text-xs p-2 rounded border border-gray-600 focus:border-violet-500 outline-none"
                          placeholder="URL do Vídeo ou Embed Link"
                          value={video.videoUrl}
                          onChange={(e) => updateVideo(cat.id, video.id, 'videoUrl', e.target.value)}
                        />
                        <input 
                          className="bg-[#333] text-white text-xs p-2 rounded border border-gray-600 focus:border-violet-500 outline-none"
                          placeholder="URL da Imagem de Capa"
                          value={video.thumbnailUrl}
                          onChange={(e) => updateVideo(cat.id, video.id, 'thumbnailUrl', e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                  <button 
                    onClick={() => addVideo(cat.id)}
                    className="w-full py-2 border-2 border-dashed border-gray-600 text-gray-400 rounded hover:border-violet-500 hover:text-violet-500 transition flex items-center justify-center gap-2 text-sm"
                  >
                    <Plus size={16} /> Adicionar Aula
                  </button>
                </div>
              )}
            </div>
          ))}

          <button 
            onClick={addCategory}
            className="w-full py-3 bg-violet-900/20 text-violet-400 rounded border border-violet-900/50 hover:bg-violet-900/40 transition flex items-center justify-center gap-2 font-bold"
          >
            <Plus size={20} /> Novo Módulo
          </button>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-800 bg-[#141414] space-y-3">
          <button 
            onClick={handleSave}
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded flex items-center justify-center gap-2 transition"
          >
            <Save size={20} /> Salvar Alterações
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={handleExport}
              className="py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded flex items-center justify-center gap-2 transition"
            >
              <Copy size={16} /> Exportar JSON
            </button>
            <button 
              onClick={handleReset}
              className="py-2 bg-red-900/50 hover:bg-red-900 text-red-200 text-sm font-bold rounded flex items-center justify-center gap-2 transition"
            >
              <RotateCcw size={16} /> Resetar Tudo
            </button>
          </div>
        </div>

        {/* Export Modal Overlay */}
        {jsonExport && (
          <div className="absolute inset-0 bg-black/90 flex flex-col p-6 z-50">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-bold">Código JSON Gerado</h3>
                <button onClick={() => setJsonExport('')}><X className="text-white" /></button>
            </div>
            <p className="text-gray-400 text-sm mb-2">Copie o código abaixo e substitua o conteúdo da constante <code>CATEGORIES</code> no arquivo <code>services/database.ts</code>.</p>
            <textarea 
                className="flex-1 bg-[#111] text-green-400 font-mono text-xs p-4 rounded border border-gray-700 outline-none"
                value={jsonExport}
                readOnly
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminPanel;