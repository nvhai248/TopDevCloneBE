### Run services

cd .\express_service\services\admin_service\
npm start

cd .\express_service\services\employer_service\
npm start

cd .\express_service\services\user_service\
npm start

### Run gateway

cd .\express_service\gateway\
npm start

### Run project using docker

NOTE: cd TopDevCloneBE/express_service

```
docker-compose up -d && docker-compose -f services/job/sharding/docker-compose.yml up -d && make all
```

### Testing

- Gateway default (User route): http://localhost:5000
- Admin : http://localhost:5000/admin
- Employer: http://localhost:5000/employer
- User: http://localhost:5000/user

### Documentation

Documentation link [here](https://documenter.getpostman.com/view/34533462/2sA3Bt1UTM)

docker compose build &&
docker tag express_service-authentication pbhuy/authentication:latest &&
docker tag express_service-job pbhuy/job:latest &&
docker tag express_service-user pbhuy/user:latest &&
docker image push pbhuy/job &&
docker image push pbhuy/user &&
docker image push pbhuy/authentication &&

docker tag express_service-application pbhuy/application:latest &&
docker tag express_service-gateway pbhuy/gateway:latest &&
docker tag express_service-nginx-loadbalancer pbhuy/nginx-loadbalancer:latest &&

docker image prune -a -f && docker compose down && docker compose build && for service in authentication job user application gateway nginx-loadbalancer; do docker tag express_service-$service pbhuy/$service:latest && docker image push pbhuy/$service; done

docker image push pbhuy/application &&
docker image push pbhuy/gateway &&
docker image push pbhuy/nginx-loadbalancer

docker stack rm express_service && docker system prune -f && docker stack deploy -c docker-deploy.yml express_service
