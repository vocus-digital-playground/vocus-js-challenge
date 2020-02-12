import express from 'express';
// @ts-ignore squash JSON compiler warning
import permissions from '../../mocks/permissions.json';

export const permissionsRoute: express.Handler = (_req, res) => {
  res.status(200).json(permissions);
};
