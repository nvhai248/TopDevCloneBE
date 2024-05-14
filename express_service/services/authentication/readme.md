### path:

cd /express_service/services/auth_H
cd /services/auth_H

### development:

- docker build . -t my-keycloak
- docker run --name my-keycloak -p 8080:8080 my-keycloak

### documents

- https://www.keycloak.org/docs-api/22.0.1/rest-api/index.html#_users
