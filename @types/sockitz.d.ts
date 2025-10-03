import type { Server } from 'http';
import type { WebSocketServer } from 'ws';
declare class Sockitz {
    private Sockitz_Server;
    Ws_Server: WebSocketServer;
    constructor(server: Server);
    private initWebSocket;
}
export default Sockitz;
//# sourceMappingURL=sockitz.d.ts.map