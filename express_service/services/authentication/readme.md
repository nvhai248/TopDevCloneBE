### How to use (local)

1. Start gateway

- cd ./gateway
- npm start

2. Start authentication service

- cd ./services/authentication
- npm start

3. Build and run Keycloak service (at ./services/authentication)

- docker build . -t keycloak-service
- docker run --name keycloak-service -p 8080:8080 keycloak-service

4. Start job service

- cd ./services/job
- npm start

### How to integrate auth service into your service (for BE team)

(See job service for an example)

1. Add AUTH_HOST to .env
2. At auth utils (see example at .job/utils/auth.js)
3. Use it (see example at ./job/transports/job/listAll.js)

- Function: checkAuth
- Input: token, role
- Output: true/false

### Test API (in Postman)

1. Login with admin
2. Register by employer
3. Login with employer
4. Get all jobs (just for admin)

- To test this use must login with admin first!!!
- If you login with employer, you cannot access!!!

### Documents

- https://www.keycloak.org/docs-api/22.0.1/rest-api/index.html#_users
