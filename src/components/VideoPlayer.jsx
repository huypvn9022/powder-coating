import { useEffect, useRef } from "react"
import { IoCloseSharp } from "react-icons/io5";

const VideoPlayer = ({ isPlaying, setIsPlaying, video }) => {
 const videoRef = useRef(null)
 useEffect(() => {
    if(!isPlaying && videoRef.current) {
      videoRef.current.pause();
    }
 }, [isPlaying])
  return (
    <section className="container">
      <div onClick={() => setPlay(!play)}>
        <div onClick={() => setIsPlaying(false)} className={`${isPlaying ? 'fixed' : 'hidden'} top-0 left-0 w-full h-full z-[200] flex items-center justify-center bg-[rgba(0,0,0,0.9)]`}>
          <div onClick={(e) => e.stopPropagation()} className="relative w-[90%] max-w-[900px]">
            <video src={video} autoPlay muted controls className="w-full h-auto border-4 border-white"></video>
            <div className="absolute top-2 right-2 cursor-pointer text-3xl bg-white" onClick={() => setIsPlaying(false)}> <IoCloseSharp /> </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoPlayer