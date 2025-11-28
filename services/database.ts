import { Category, Video } from '../types';

const STORAGE_KEY = 'mamaflix_data';

export const FEATURED_VIDEO: Video = {
  id: 'aula-4-destaque',
  title: 'O Ajuste de Ouro',
  description: 'A técnica definitiva que para a dor na hora. Descubra o "mínimo viável da pega correta" e sinta o alívio imediato na próxima mamada.',
  thumbnailUrl: 'https://picsum.photos/seed/mother/1920/1080',
  videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  duration: '15 min',
  year: '2024',
  isEmbed: false
};

const DEFAULT_CATEGORIES: Category[] = [
  {
    id: 'mod-1',
    title: 'Módulo 1: Entenda por que está doendo',
    videos: [
      {
        id: 'aula-1',
        title: 'Aula 1: O que causa a dor',
        description: 'Pega + atrito + posição + tensão + fissura. Entenda a raiz do problema.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=10',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: '10 min',
        isEmbed: false
      },
      {
        id: 'aula-2',
        title: 'Aula 2: O erro silencioso',
        description: 'O erro que está piorando sua fissura e você faz sem perceber. Quebre esse ciclo agora.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=11',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '12 min',
        isEmbed: false
      },
      {
        id: 'aula-3',
        title: 'Aula 3: "É normal doer?"',
        description: 'A verdade sobre a dor no começo. Vamos desprogramar a culpa e as crenças limitantes.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=12',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: '15 min',
        isEmbed: false
      },
    ]
  },
  {
    id: 'mod-2',
    title: 'Módulo 2: Pare a dor na próxima mamada',
    videos: [
      {
        id: 'aula-4',
        title: 'Aula 4: O Ajuste de Ouro',
        description: 'A técnica prática para parar a dor imediatamente.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=13',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: '20 min',
        isEmbed: false
      },
      {
        id: 'aula-5',
        title: 'Aula 5: A Posição de Alívio',
        description: 'Demonstração da posição que reduz 70% da dor em minutos.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=14',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        duration: '18 min',
        isEmbed: false
      },
      {
        id: 'aula-6',
        title: 'Aula 6: Ritual Pré-mamada',
        description: '2 minutos para desinchar, relaxar e reduzir o atrito antes de começar.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=15',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        duration: '10 min',
        isEmbed: false
      }
    ]
  },
  {
    id: 'mod-3',
    title: 'Módulo 3: Protocolo 24 Horas (Fechar Fissura)',
    videos: [
      {
        id: 'aula-7',
        title: 'Aula 7: Cicatrização Turbo',
        description: 'Como fechar a fissura 3x mais rápido com segurança.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=16',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        duration: '25 min',
        isEmbed: false
      },
      {
        id: 'aula-8',
        title: 'Aula 8: Entre as Mamadas',
        description: 'O que fazer nos intervalos. É aqui que a mágica da cicatrização acontece.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=17',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        duration: '15 min',
        isEmbed: false
      },
      {
        id: 'aula-9',
        title: 'Aula 9: Blindagem',
        description: 'Como evitar que a fissura abra de novo após cicatrizar.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=18',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        duration: '12 min',
        isEmbed: false
      }
    ]
  },
  {
    id: 'mod-4',
    title: 'Módulo 4: Prevenção (Para a dor não voltar)',
    videos: [
      {
        id: 'aula-10',
        title: 'Aula 10: Identificando Sinais',
        description: 'Como identificar o início de uma nova fissura e cortar o mal pela raiz.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=19',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        duration: '15 min',
        isEmbed: false
      },
      {
        id: 'aula-11',
        title: 'Aula 11: Posições Seguras',
        description: 'As 3 posições mais seguras para quem tem peito sensível.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=20',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: '20 min',
        isEmbed: false
      },
      {
        id: 'aula-12',
        title: 'Aula 12: Ajuda Presencial',
        description: 'Quando procurar ajuda médica ou consultoria presencial (sem culpa).',
        thumbnailUrl: 'https://picsum.photos/400/225?random=21',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '10 min',
        isEmbed: false
      }
    ]
  },
  {
    id: 'mod-5',
    title: 'Módulo 5: Guia de Emergência',
    videos: [
      {
        id: 'bonus-1',
        title: 'Bônus 1: Dor Insuportável',
        description: 'Checklist rápido do que fazer quando a dor está demais.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=22',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: '5 min',
        isEmbed: false
      },
      {
        id: 'bonus-2',
        title: 'Bônus 2: Alívio em 60s',
        description: 'Mini protocolo emergencial para alívio imediato.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=23',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        duration: '2 min',
        isEmbed: false
      },
      {
        id: 'bonus-3',
        title: 'Bônus 3: Bebê Rejeitando',
        description: 'O que fazer quando o bebê briga com o peito por causa da dor.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=24',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        duration: '15 min',
        isEmbed: false
      }
    ]
  },
  {
    id: 'extras',
    title: 'Materiais Complementares (Baixe aqui)',
    videos: [
      {
        id: 'extra-1',
        title: 'Checklist Alívio Rápido',
        description: 'PDF Guia rápido para ter no celular.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=25',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        duration: 'PDF',
        isEmbed: false
      },
      {
        id: 'extra-2',
        title: 'Guia de Posições',
        description: 'PDF Ilustrado com as melhores posições.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=26',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        duration: 'PDF',
        isEmbed: false
      },
      {
        id: 'extra-3',
        title: 'Mapa do Protocolo 24h',
        description: 'PDF Cronograma para cicatrização.',
        thumbnailUrl: 'https://picsum.photos/400/225?random=27',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        duration: 'PDF',
        isEmbed: false
      }
    ]
  }
];

// Load categories from local storage or fallback to defaults
const loadCategories = (): Category[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load from storage', e);
  }
  return DEFAULT_CATEGORIES;
};

export const CATEGORIES = loadCategories();

export const getAllVideos = () => {
  const all: Video[] = [FEATURED_VIDEO];
  CATEGORIES.forEach(cat => all.push(...cat.videos));
  return all;
};

export const getVideoById = (id: string) => {
  return getAllVideos().find(v => v.id === id);
};

export const saveData = (newCategories: Category[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newCategories));
};

export const resetData = () => {
  localStorage.removeItem(STORAGE_KEY);
};