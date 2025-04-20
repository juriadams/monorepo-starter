import { optional, vars } from '@monorepo/core/env';
import { Engine } from '@ronin/engine';
import { StaticValidator } from '@ronin/engine/auth';
import { S3Resolver } from '@ronin/engine/resolvers/s3';
import { Server } from '@ronin/engine/server';

const env = vars([
  optional('PORT'),
  optional('DB_SECRET'),
  'S3_HOST',
  'S3_BUCKET',
  'S3_ACCESS_KEY_ID',
  'S3_SECRET_ACCESS_KEY',
] as const);

const engine = new Engine({
  resolvers: [
    (engine) =>
      new S3Resolver(
        { engine },
        {
          bucket: {
            host: env.S3_HOST,
            bucket: env.S3_BUCKET,
            accessKeyId: env.S3_ACCESS_KEY_ID,
            secretAccessKey: env.S3_SECRET_ACCESS_KEY,
          },
        },
      ),
  ],
});

const server = new Server(
  { engine },
  {
    port: Number(env.PORT || 3000),
    authValidator: env.DB_SECRET ? new StaticValidator([env.DB_SECRET]) : undefined,
  },
).start();

console.info(
  `[${new Date().toISOString()}] listening on http://localhost:${server.port}`,
);

process.on('SIGTERM', async () => {
  await engine.stop();
  server.stop();

  process.exit(0);
});
