import type { Server } from 'http';
import Sockitz_Server from './server.js';

class Sockitz extends Sockitz_Server{
  constructor(server: Server) {
    super(server)
  }
};
export default Sockitz;
