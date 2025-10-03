import Sockitz_Server from './server.js';
// import Sockitz_Client from './client.js';
class Sockitz {
    Sockitz_Server;
    Ws_Server;
    constructor(server) {
        this.Sockitz_Server = new Sockitz_Server(server);
        this.Ws_Server = this.Sockitz_Server.sockit_server;
        this.initWebSocket;
    }
    initWebSocket() {
        this.Ws_Server
            .on('connection', (ws, req) => {
            const ip = req.socket.remoteAddress;
            ws.emit('zREADY', { client: ws, ip });
            ws.on('message', (data) => {
                ws.emit('zMESSAGE', { client: ws, data });
            });
            ws.on('close', () => {
                ws.emit('zCLOSE', { client: ws });
            });
        })
            .on('error', (e) => {
            this.Ws_Server.emit('zERROR', { error: e });
        });
    }
    ;
}
;
export default Sockitz;
//# sourceMappingURL=sockitz.js.map