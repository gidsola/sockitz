import type { Server } from 'http';
import type { WebSocketServer } from 'ws';

import Sockitz_Server from './server.js';
// import Sockitz_Client from './client.js';


class Sockitz {

  Ws_Server: WebSocketServer;
  // Ws_Client;

  constructor(server: Server) {

    this.Ws_Server = new Sockitz_Server(server).sockit_server;
    // this.Ws_Client = new Sockitz_Client(process.env.DOMAIN!)

  }



};
export default Sockitz;
