import express from 'express';
// @ts-ignore squash JSON compiler warning
import users from '../../mocks/users.json';

export const usersRoute: express.Handler = (_req, res) => {
  res.status(200).json(users);
};
