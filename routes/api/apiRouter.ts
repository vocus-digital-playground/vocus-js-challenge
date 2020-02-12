import express from 'express';
import { permissionsRoute } from './permissions';
import { rolesRoute } from './roles';
import { usersRoute } from './users';

export const apiRouter = express.Router();

apiRouter.get('/permissions', permissionsRoute);
apiRouter.get('/roles', rolesRoute);
apiRouter.get('/users', usersRoute);
