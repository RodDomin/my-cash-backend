import { Router } from 'express';

const routes = Router();


routes.all('/', (_, res) => {
  return res.end();
});

export default routes;
