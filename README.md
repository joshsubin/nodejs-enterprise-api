# Node.js Enterprise API

A portfolio starter demonstrating TypeScript, Express, request validation, REST conventions and centralized service entry points. Uses in-memory demo data so it runs without a database; add MongoDB/PostgreSQL adapters before presenting database persistence as implemented.

## Run
```bash
npm install
cp .env.example .env
npm run dev
```
API: `GET /health`, `GET /api/v1/users`, `POST /api/v1/users`.

## Next improvements
- Add a real database repository and migrations.
- Implement authentication, refresh-token rotation and RBAC.
- Add rate limiting, structured logging and integration tests.
- Add OpenAPI/Swagger documentation.

**Demo only:** do not use as-is for production. No real authentication or persistent storage is included.
