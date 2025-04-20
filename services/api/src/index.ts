import { env } from 'bun';
import { Elysia } from 'elysia';

console.info(
  `[${new Date().toISOString()}] listening on http://localhost:${Number(env.PORT || 3000)}`,
);

export const api = new Elysia()
  .all('/', (req) => {
    console.info(`[${new Date().toISOString()}] ${req.request.method} ${req.path}`);

    return Response.json(
      {
        data: null,
        error: null,
      },
      {
        status: 200,
        statusText: 'OK',
      },
    );
  })
  .listen(Number(env.PORT || 3000));
