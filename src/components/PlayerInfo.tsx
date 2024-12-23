import React, { useRef, useLayoutEffect, useState } from 'react';
import { Music2 } from 'lucide-react';
import '../PlayerInfo.css';

interface PlayerInfoProps {
  song: string;
  artist: string;
  progress: number;
  duration: number;
}

export const PlayerInfo = ({ song, artist, progress, duration }: PlayerInfoProps) => {
  const [isMarquee, setIsMarquee] = useState(false);

  const songRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (songRef.current) {
        const songWidth = songRef.current.scrollWidth;
        console.log(songWidth);
        const containerWidth = songRef.current.clientWidth;
        console.log(containerWidth);
        if (songWidth >= containerWidth) {
          setIsMarquee(true);
        } else {
          setIsMarquee(false);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [song, artist, duration]);

  const progressPercentage = (progress / duration) * 100;

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 text-center mx-auto" style={{ maxWidth: '80%' }}>
          <div className="relative overflow-hidden" style={{ width: '80%', margin: '0 auto', height: '2.5rem' }}>
            <h2
              ref={songRef}
              className={`text-xl font-bold text-white ${isMarquee ? 'marquee' : ''}`}
              style={{ textAlign: 'center', whiteSpace: 'nowrap' }}
            >
              {song}
            </h2>
          </div>
          <p className="text-gray-400 truncate mx-auto" style={{ maxWidth: '80%' }}>{artist}</p>
        </div>
        <Music2 className="w-6 h-6 text-green-500" />
      </div>
      
      <div className="mt-4">
        <div className="w-full h-1 bg-gray-700 rounded-full">
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};