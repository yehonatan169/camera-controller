const cameras = [
    { id: "cam-1", name: "Entrance", status: "idle" },
    { id: "cam-2", name: "Main Hall", status: "active" },
  ];
  
  exports.getCameras = (req, res) => {
    res.json(cameras);
  };
  
  exports.getStreamUrl = (req, res) => {
    const { id } = req.params;
    // בהמשך אפשר לשלב כתובת אמיתית או WebRTC
    res.json({ streamUrl:`http://localhost:3000/static/streams/${id}.mjpeg`});
    };