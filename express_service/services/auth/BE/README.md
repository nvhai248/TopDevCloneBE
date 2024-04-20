### BACKUP KEYCLOAK CONFIG
cd /opt/keycloak/bin
./kc.sh export --file /tmp/keycloak.json
cd /tmp
ls
cat keycloak.json