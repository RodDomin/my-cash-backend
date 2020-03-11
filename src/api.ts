import Express, { Application } from 'express';
import routes from './routes';

class Api {
  application: Application;
  port: number;

  constructor(port: number = 3333) {
    this.port = port;

    this.application = Express();

    this.routes();
  }

  routes(): void {
    this.application.use(routes);
  }

  run(): void {
    this.application.listen(this.port);
  }
}

export default Api;
