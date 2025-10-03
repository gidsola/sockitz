import type { Server } from 'http';
declare class Sockitz_Server {
    sockit_server: import("ws").Server<typeof import("ws").default, typeof import("http").IncomingMessage>;
    constructor(server: Server);
    init(): Promise<void>;
}
export default Sockitz_Server;
//# sourceMappingURL=server.d.ts.map