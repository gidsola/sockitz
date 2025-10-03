import type { Server } from 'http'
import { WebSocketServer } from 'ws';


class Sockitz_Server {

  sockit_server;

  constructor(server: Server) {

    this.sockit_server = new WebSocketServer({ server: server });

  }

};
export default Sockitz_Server;