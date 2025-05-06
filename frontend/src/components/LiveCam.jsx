import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

export default function LiveCam() {
  const videoRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "No object was found... Area is clear...";
  
  useEffect(() => {
    // Initialize the video stream
    const video = videoRef.current;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("https://video.weather2day.co.il:4438/live/hermon/playlist.m3u8");
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = "https://video.weather2day.co.il:4438/live/hermon/playlist.m3u8";
    }

    // Typing simulation after 3 second delay
    const startTyping = setTimeout(() => {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < fullText.length) {
          setTypedText((prev) => prev + fullText[index]);
          index++;
        } else {
          clearInterval(typeInterval); // ✅ Stop exactly at the end
        }
      }, 70);// character typing speed
    }, 3000);

    return () => clearTimeout(startTyping);
  }, []);

  return (
    <div className="container-center" style={{ flexDirection: "column", paddingTop: "3rem" }}>
      <h2 className="dashboard-title">Live Stream</h2>

      <video
        id="video"
        ref={videoRef}
        controls
        autoPlay
        muted
        className="video-player"
        style={{
          width: "100%",
          maxWidth: "768px",
          borderRadius: "0.5rem",
          border: "1px solid #30363d"
        }}
      />

      <div
        className="explanation-box"
        style={{
          marginTop: "2rem",
          width: "100%",
          maxWidth: "768px",
          backgroundColor: "#161b22",
          color: "#c9d1d9",
          border: "1px solid #30363d",
          borderRadius: "0.5rem",
          padding: "1rem",
          fontSize: "1rem",
          lineHeight: "1.5",
          whiteSpace: "pre-wrap",
          minHeight: "4rem"
        }}
      >
        <strong>Explanation:</strong> <br />
        {typedText}
      </div>
    </div>
  );
}
