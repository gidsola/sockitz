import type { Server } from 'http'
import { WebSocketServer } from 'ws';
import { EventEmitter } from 'node:events';


class Sockitz_Server extends EventEmitter {

  constructor(server: Server) {
    super();

    new WebSocketServer({ server: server })

      .on('connection', (ws, req) => {

        const ip = req.socket.remoteAddress;
        this.emit('zREADY', { client: ws, ip });

        ws.on('message', (data) => {
          this.emit('zMESSAGE', { client: ws, data });
        });

        ws.on('close', () => {
          this.emit('zCLOSE', { client: ws });
        });
      })

      .on('error', (e) => {
        this.emit('zERROR', { error: e });
      });

  }

};
export default Sockitz_Server;
