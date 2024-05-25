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
