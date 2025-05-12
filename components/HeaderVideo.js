export default function HeaderVideo() {
    return (
        <header style={{ position: 'relative', overflow: 'hidden' }}>
        <video
            src="/videos/presentation-video-14.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            style={{ width: '100vw', height: '100dvh', objectFit: 'cover' }}
        />
      
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.6)', 
          pointerEvents: 'none',
          zIndex: 1
        }} />
      
      </header>
      
    );
}