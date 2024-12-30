import React, { useEffect } from 'react';

const Callback: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    let token: string | null = null;

    if (hash) {
      const params = new URLSearchParams(hash.replace('#', ''));
      token = params.get('access_token');
    }

    if (token) {
      // Guarda el token en el almacenamiento local o en el estado de la aplicación
      localStorage.setItem('spotifyAccessToken', token);
      // Redirige a la página principal o a donde desees
      window.location.hash = ''; // Limpia el hash de la URL
      window.location.href = '/'; // Redirige a la página principal
    }
  }, []);

  return <div>Loading...</div>;
};

export default Callback;