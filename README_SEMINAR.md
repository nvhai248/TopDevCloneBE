## DOCUMENT FOR GRPC-CLIENT-TRI BRANCH

**NOTE: This document use for Github branch `seminar/grpc-client-tri` only.**

### 1. Run gateway
* cd .\express_service\gateway\

**Install package**
```javascript
    npm install
```

**Run gateway**
```javascript
    npm run start
```

### 2. Run services
* cd .\express_service\services\job_service\

**Install package**
```javascript
    npm install
```

**Run service + grpc server**
```javascript
    npm run start
```

* or with developer mode

```javascript
    npm run dev
```

**Run grpc server only**
```javascript
    npm run grpc
```

* or with developer mode

```javascript
    npm run grpc:dev
```


### Testing
- Gateway default (User route): http://localhost:5000
- Job : http://localhost:5000/job || http://localhost:5004
