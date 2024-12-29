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
  const [isArtistMarquee, setIsArtistMarquee] = useState(false);

  const songRef = useRef<HTMLHeadingElement>(null);
  const artistRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (songRef.current && artistRef.current) {
        const songWidth = songRef.current.scrollWidth;
        const songContainerWidth = songRef.current.parentElement?.clientWidth || 0;
        const artistWidth = artistRef.current.scrollWidth;
        const artistContainerWidth = artistRef.current.parentElement?.clientWidth || 0;

        setIsMarquee(songWidth > songContainerWidth);
        setIsArtistMarquee(artistWidth > artistContainerWidth);
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
        <div className="flex-1 text-center mx-auto" style={{ maxWidth: '80%', height: '55px' }}>
          
          <div className="relative overflow-hidden" style={{ width: '80%', margin: '0 auto' }}>
            <h2
              ref={songRef}
              className={`text-xl font-bold text-white ${isMarquee ? 'marquee' : ''}`}
              style={{ textAlign: 'center', whiteSpace: 'nowrap' }}
            >
              {song}
            </h2>
          </div>

          <div className="relative overflow-hidden" style={{ width: '80%', margin: '0 auto' }}>
            <div className={`text-gray-400 truncate mx-auto ${isArtistMarquee ? 'marquee' : ''}`} style={{ textAlign: 'center' }}>
              <h3 ref={artistRef}>
                {artist}
              </h3>
            </div>
          </div>
          
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