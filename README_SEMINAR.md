## DOCUMENT FOR GRPC-CLIENT-TRI BRANCH

**NOTE: This document use for Github branch `seminar/grpc-client-tri` only.**

### 1. Run gateway
* cd .\express_service\gateway\

```javascript
    npm install // install package
    npm run start // run gateway
```

### 2. Run services
* cd .\express_service\services\job_service\

```javascript
    npm install // install package
    npm run start // run job service
    npm run grpc // run only grpc server
    npm run dev // run job service developer mode
    npm run grpc:dev // run only grpc server developer mode
```

### Testing
- Gateway default (User route): http://localhost:5000
- Job : http://localhost:5000/job || http://localhost:5004
