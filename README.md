# Development

* [Node.js: v20](https://nodejs.org/en)
* [Pnpm: v9](https://pnpm.io/)
* [Docker](https://docs.docker.com/engine/)

## Cli

* Install dependencies for **frontend** and **backend** folder

```bash
pnpm i
```

* Run needed services (postgres)

```bash
docker compose up -d
```

* Generate prisma schema and migrate dev database

```bash
pnpx prisma generate
pnpx prisma migrate dev
```

* Start development

```bash
pnpm dev
```
