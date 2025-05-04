
const { proxy } = require('rtsp-relay');



const handler = (url) => {
    return proxy({
        additionalFlags: ['-q', '1'],  // Reduce quality for lower bandwidth
        url: url,
        transport: 'tcp',             // Use TCP for stream transport
        verbose: true,                // Print FFmpeg logs
    });
};

const streamHandler = ('/', (ws, req) => {
    //const url = req.query.url;      // Get RTSP URL from query parameter
    const url = `rtsp://localhost:8554/mystream`
    handler(url)(ws, req);          // Proxy RTSP stream via WebSocket
});

module.exports = { streamHandler } ;