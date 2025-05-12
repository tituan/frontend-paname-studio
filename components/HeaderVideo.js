import { useEffect, useRef } from 'react';

export default function HeaderVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        // iOS/Safari peuvent refuser sans interaction utilisateur
        console.warn("Autoplay refusé :", err);
      });
    }
  }, []);

  return (
    <header style={{ position: 'relative', overflow: 'hidden' }}>
      <video
        ref={videoRef}
        src="/videos/presentation-video-10.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100vw', height: '100dvh', objectFit: 'cover' }}
      />

      {/* Overlay blanc */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </header>
  );
}
