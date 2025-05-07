import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

export default function LiveCam() {
  const videoRef = useRef(null);
  const [typedText, setTypedText] = useState("");

  const getTimestamp = () => {
    return new Date().toLocaleTimeString(); // HH:MM:SS format
  };

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

    // Log the first timestamp immediately
    setTypedText(`[${getTimestamp()}] No object was found... Area is clear...`);

    // Add a new line every 20 seconds
    const intervalId = setInterval(() => {
      setTypedText((prev) =>
        prev + `\n[${getTimestamp()}] No object was found... Area is clear...`
      );
    }, 20000); // 20,000ms = 20 seconds

    return () => clearInterval(intervalId);
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
