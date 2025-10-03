import { WebSocketServer } from 'ws';
class Sockitz_Server {
    sockit_server;
    constructor(server) {
        this.sockit_server = new WebSocketServer({ server: server });
        // this.init();
    }
    async init() {
        this.sockit_server.on('connection', (ws) => {
            console.log('New client connected!');
            // Send a welcome message
            ws.send('Welcome to the WebSocket server!');
            // Handle messages from the client
            ws.on('message', (message) => {
                console.log(`Received: ${message}`);
                // Echo the message back
                ws.send(`Server received: ${message}`);
            });
            // Handle client disconnection
            ws.on('close', () => {
                console.log('Client disconnected');
            });
        });
        console.log('WebSocket server running on ws://localhost:8080');
    }
}
;
export default Sockitz_Server;
//# sourceMappingURL=server.js.map