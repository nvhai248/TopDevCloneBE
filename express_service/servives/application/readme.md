### Development Running

#### Tools

- Install MySQL at local, create a database in mysql name `topdev_schema`, username is `root`, and password is `admin`
  P/s: Can change these values at `database.js` file if needed

#### Set up API

- cd to `/express_service/servives/job`
- npm i
- npm start (if this step get error when connect to mysql, read solution below)
- GET `localhost:5006` to test connection
- GET `localhost:5006/createdb` to reset and init Jobs table in database

#### Using:

router.post("/create", handlers.create);
router.put("/applications/:id/status", handlers.updateStatus);
router.get("/applications", handlers.getApplications);

- POST `/create` to create a application
- PUT `/applications/:id/status` to update a application status (body: `{status: "interview"}`)
  P/s: status must be: new, interview, offer, reject
- GET `/applications` to get applications. (can get by `userId` or `jobId` in the query)
- GET `/application/:id` to get a application.

#### MySQL can not connect fix

Execute the following query in MYSQL Workbench
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

P/s: Where root as your user localhost as your URL and password as your password

Then run this query to refresh privileges:
flush privileges;

Try connecting using node after you do so. If that doesn't work, try it without @'localhost' part.
