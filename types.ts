export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string; // Can be an MP4 link or an Embed URL
  duration: string;
  year?: string;
  isEmbed: boolean;
}

export interface Category {
  id: string;
  title: string;
  videos: Video[];
}

export interface User {
  id: string;
  email: string;
  name: string;
}