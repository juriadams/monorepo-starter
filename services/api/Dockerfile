ARG BUN_VERSION=1.2.10

FROM oven/bun:$BUN_VERSION as base

# ------------------------------------------------------------------------------

FROM base AS install

RUN mkdir -p /src
RUN mkdir -p /dist

COPY ./ /src

# Remove any `.env` files that might have been copied over when building locally.
RUN find /src -name "*.env" -type f -delete

WORKDIR /src/services/db
RUN bun install

# ------------------------------------------------------------------------------

FROM install AS build

COPY --from=install /src /src

WORKDIR /src/services/api
RUN bun run build

# ------------------------------------------------------------------------------

FROM base AS run

COPY --from=build /src/services/api/dist /dist

USER bun
EXPOSE 3000/tcp

WORKDIR /dist
ENTRYPOINT [ "bun", "run", "index.js" ]