import React from 'react';
import { Pause, Play } from 'lucide-react';

interface AlbumArtProps {
  albumArt: string;
  albumName: string;
  isPlaying: boolean;
}

export const AlbumArt = ({ albumArt, albumName, isPlaying }: AlbumArtProps) => (
  <div className="relative">
    <img 
      src={albumArt} 
      alt={`${albumName} cover`}
      className="w-full h-[350px] object-cover rounded-lg shadow-lg"
    />
    {!isPlaying && (
      <div className="absolute inset-0 bg-black/40 opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
        <Play className="w-16 h-16 text-white" />
      </div>
    )}
  </div>
);