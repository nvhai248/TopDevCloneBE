FROM quay.io/keycloak/keycloak:latest as builder

# Enable health and metrics support
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true

# Configure a database vendor
ENV KC_DB=postgres

WORKDIR /opt/keycloak
# for demonstration purposes only, please make sure to use proper certificates in production instead
RUN keytool -genkeypair -storepass password -storetype PKCS12 -keyalg RSA -keysize 2048 -dname "CN=server" -alias server -ext "SAN:c=DNS:localhost,IP:127.0.0.1" -keystore conf/server.keystore
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:latest
COPY --from=builder /opt/keycloak/ /opt/keycloak/

# change these values to point to a running postgres instance
# psql "postgres://default:6V1OocaldpND@ep-late-cloud-a1qog1c7.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
ENV KC_DB=postgres
# ENV KC_DB_URL=jdbc:postgresql://host.docker.internal:5432/postgres
ENV KC_DB_URL=jdbc:postgresql://ep-late-cloud-a1qog1c7.ap-southeast-1.aws.neon.tech/keycloak?sslmode=require
ENV KC_DB_USERNAME=default
ENV KC_DB_PASSWORD=6V1OocaldpND

# ENV KC_HOSTNAME=ep-late-cloud-a1qog1c7.ap-southeast-1.aws.neon.tech
ENV KC_HOSTNAME=localhost
ENV KC_HOSTNAME_PORT=8888


ENV KC_KEYCLOAK_ADMIN=admin
ENV KC_KEYCLOAK_ADMIN_PASSWORD=change_me

ENTRYPOINT ["/opt/keycloak/bin/kc.sh","start","--optimized"]