import express from 'express';
// @ts-ignore squash JSON compiler warning
import roles from '../../mocks/roles.json';

interface IRoleDTO {
  userId: number;
  role: string;
}

export const rolesRoute: express.Handler = (req, res) => {
  const ids: string[] = req.query.id;

  if (!ids) {
    return res.status(400).json({
      error: 'Bad request. Missing `id` query parameter.'
    });
  }

  const parsed = ids.map(x => parseInt(x, 10));
  const matches: IRoleDTO[] = roles.filter(role => parsed.includes(role.userId))

  return res.status(200).json(matches);
};
