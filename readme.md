# Monorepo

[![Validate](https://github.com/juriadams/monorepo-starter/actions/workflows/validate.yml/badge.svg)](https://github.com/juriadams/monorepo-starter/actions/workflows/validate.yml)

An opinionated yet lean monorepo starter template for building TypeScript projects with Bun, optimized for developer experience and velocity using Turborepo.

## Repository

### Packages

- [`@monorepo/core`](/packages/core/readme.md)

### Services

- [`@monorepo/core`](/services/api/readme.md)
- [`@monorepo/core`](/services/db/readme.md)

## Lifecycle

### Develop

```bash
bun run dev
```

### Build

```bash
bun run build
```

### Types

```bash
bun run typecheck
```

### Test

```bash
bun run test
```

### Release

```bash
bun run release
```