import React, { useEffect } from 'react';
import NowPlaying from './components/NowPlaying';

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = new URLSearchParams(hash.substring(1)).get('access_token');
      if (token) {
        window.location.href = `https://jasonlocke8.github.io/StreamSpotify?access_token=${token}`;
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <NowPlaying />
    </div>
  );
}

export default App;