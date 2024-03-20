### Development Running

#### Tools

- Install MySQL at local, create a database in mysql name `topdev_schema`, username is `root`, and password is `admin`
  P/s: Can change these values at `database.js` file if needed

#### Set up API

- cd to `/express_service/servives/job`
- npm i
- npm start (if this step get error when connect to mysql, read solution below)
- GET `localhost:5005` to test connection
- GET `localhost:5005/createdb` to reset and init Jobs table in database

#### Using:

- GET `/company/:companyId` to get company by id

#### MySQL can not connect fix

Execute the following query in MYSQL Workbench
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

P/s: Where root as your user localhost as your URL and password as your password

Then run this query to refresh privileges:
flush privileges;

Try connecting using node after you do so. If that doesn't work, try it without @'localhost' part.
