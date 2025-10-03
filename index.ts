import type { Server } from 'http'

import Sockitz_Server from './server';
import Sockitz_Client from './client';


class Sockitz {

  Sockitz_Server;
  Sockitz_Client;

  constructor(server: Server) {

    this.Sockitz_Server = new Sockitz_Server(server);
    this.Sockitz_Client = new Sockitz_Client(process.env.DOMAIN!)

  }



};
export default Sockitz;
