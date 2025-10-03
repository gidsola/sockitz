

import WebSocket from 'ws';



class Sockitz_Client {

  Host;

  constructor(host: string) {

    this.Host = new WebSocket('ws://localhost:8080');

    this.Host
      .on('open', () => {
        console.log('Connected to server');
        this.Host.send('Hello Server!');
      })
      .on('message', (data) => {
        console.log(`Received: ${data}`);
      })
      .on('close', () => {
        console.log('Disconnected from server');
      });
  }

};
export default Sockitz_Client;
