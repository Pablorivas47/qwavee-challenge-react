import ReactPlayer from 'react-player';
import { useState } from 'react';

export default function VideoPlayer() {
  const [playing] = useState(true);

  return (
    <div className="relative bg-black overflow-hidden md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px] s:w-[300px] s:h-[300px]">
      <ReactPlayer
        url="/assets/videos/video.mp4"
        playing={playing}
        controls 
        onPause={() => console.log('El video está en pausa')}
        onEnded={() => console.log('El video terminó')}
        loop
        muted
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
      />
    </div>
  );
}
