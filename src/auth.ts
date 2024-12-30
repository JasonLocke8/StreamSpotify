import { config } from './config/index';

// auth.ts
const clientId = config.SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_REDIRECT_URI
  ? 'https://localhost:3000/callback'
  : 'https://<username>.github.io/<repository-name>/callback';

const authEndpoint = 'https://accounts.spotify.com/authorize';
const scopes = [
  'user-read-currently-playing',
  'user-read-playback-state',
  // Añade otros scopes que necesites
];

export const getSpotifyAuthUrl = (): string => {
  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
};

export const redirectToSpotifyAuth = (): void => {
  window.location.href = getSpotifyAuthUrl();
};