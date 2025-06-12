import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function RadioPlayer() {
  const [player, setPlayer] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [track, setTrack] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('spotify_access_token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (!token) return;

    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const spotifyPlayer = new window.Spotify.Player({
        name: 'Paname Studio Radio',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
      });

      spotifyPlayer.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        play(device_id, token);
      });

      spotifyPlayer.addListener('player_state_changed', (state) => {
        if (!state) return;
        setIsPaused(state.paused);
        setTrack(state.track_window.current_track);
      });

      spotifyPlayer.connect();
      setPlayer(spotifyPlayer);
    };
  }, [token]);

  const play = async (device_id, token) => {
    await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        context_uri: 'spotify:playlist:2yJmb8SS9ibGGEFJItly5M',
        offset: { position: 0 },
        position_ms: 0
      })
    });
  };

  const togglePlay = () => {
    player.togglePlay();
  };

  const handleConnect = async () => {
    const response = await fetch('/spotify/login');
    window.location.href = response.url;
  };

  if (!token) {
    return (
      <div style={{
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        background: '#111', color: '#fff', padding: '10px',
        display: 'flex', justifyContent: 'center', zIndex: 9999
      }}>
        <button onClick={handleConnect} style={{
          padding: '10px 20px', background: '#1DB954',
          border: 'none', borderRadius: 20, color: '#fff'
        }}>
          Connecter Spotify
        </button>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: 0, left: 0, right: 0,
      background: '#111', color: '#fff', padding: '10px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      zIndex: 9999
    }}>
      {track && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={track.album.images[2].url} alt={track.name} style={{ width: 50, height: 50, marginRight: 10 }} />
          <div>
            <div>{track.name}</div>
            <div style={{ fontSize: '0.8rem', color: '#aaa' }}>{track.artists.map(a => a.name).join(', ')}</div>
          </div>
        </div>
      )}
      <button onClick={togglePlay} style={{
        padding: '10px 20px', background: '#1DB954',
        border: 'none', borderRadius: 20, color: '#fff'
      }}>
        {isPaused ? 'Play' : 'Pause'}
      </button>
    </div>
  );
}
