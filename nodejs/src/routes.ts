/* eslint-disable */
import { Router } from 'express';

import ItemController from './app/controllers/ItemController';
import PointController from './app/controllers/PointController';

const routes: any = Router();

/* index, show, create, update, delete */

/* Items */
routes.get('/items', ItemController.index);

/* Points */
routes.get('/points', PointController.index);
routes.get('/points/:id', PointController.show);
routes.post('/points', PointController.store);

export default routes;
