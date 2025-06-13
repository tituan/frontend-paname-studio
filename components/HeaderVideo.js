export default function HeaderVideo() {
  return (
    <header style={{ position: 'relative', width: '100vw', height: '100dvh', overflow: 'hidden' }}>
      {/* <video
        src="/videos/presentation-video-14.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      /> */}
      
      {/* Overlay */}
      {/* <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      /> */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 30%, #C0D8D8 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
    </header>
  );
}
