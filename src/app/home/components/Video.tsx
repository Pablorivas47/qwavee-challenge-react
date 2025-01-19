import ReactPlayer from 'react-player';
import { useState } from 'react';

export default function VideoPlayer() {
  const [playing] = useState(true);

  return (
    <div className="relative w-[600px] h-[600px] bg-black overflow-hidden">
      <ReactPlayer
        url="/assets/videos/video.mp4"
        playing={playing}
        controls // Muestra los controles del video
        onPause={() => console.log('El video está en pausa')}
        onEnded={() => console.log('El video terminó')}
        loop
        muted
        width="100%" // Asegura que ocupe todo el ancho del contenedor
        height="100%" // Asegura que ocupe toda la altura del contenedor
        className="absolute top-0 left-0"
      />
    </div>
  );
}
