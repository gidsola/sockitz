import { WebSocketServer } from 'ws';
class Sockitz_Server {
    sockit_server;
    constructor(server) {
        this.sockit_server = new WebSocketServer({ server: server });
    }
}
;
export default Sockitz_Server;
//# sourceMappingURL=server.js.map