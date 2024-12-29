import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerInfo from './components/PlayerInfo';
import NowPlaying from './components/NowPlaying';

const App = () => {
  return (
    <Router basename="/StreamSpotify">
      <Routes>
        <Route path="/callback" element={<PlayerInfo song="Song Name" artist="Artist Name" progress={0} duration={200} />} />
        <Route path="/" element={<NowPlaying />} />
      </Routes>
    </Router>
  );
};

export default App;