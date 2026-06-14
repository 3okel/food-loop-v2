import { useState } from 'react'
import { Play } from 'lucide-react'
export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false)
  return <div className="video-box" onClick={() => setPlaying(true)}>{playing ? <iframe title="Sustainability video" width="100%" height="100%" src="https://www.youtube.com/embed/6zHXprB7PVU?autoplay=1" allow="autoplay; encrypted-media" allowFullScreen style={{border:0,borderRadius:34}} /> : <button className="play" aria-label="Play video"><Play fill="currentColor" size={40}/></button>}</div>
}
