# JobPortal's JOB Service 
The Job Service ensures that companies can create their profile here and create job openings mentioning the job description,skills required,experience etc. 

## Setup and Installation :

- Go to `JOB_SERVICE` and execute `npm install`
- Create a `.env` file in the `JOB_SERVICE` directory based on file `.envExample` 
- Create a new  file `config.json` inside `src/config` folder with following json
 
```

{
  "development": {
    "username": <MYSQL_LOGIN_USERNAME>,
    "password": <PASSWORD>,
    "database": "JOB_SERVICE_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
* Go to `JOB_SERVICE/src` and execute 
  * `npx sequelize db:create`
  * `npx sequelize db:migrate`

- Go to `JOB_SERVICE` and start the server by `npm start`
- Uncomment line no `6 and 22` in index.js and then comment it again,once the db get synced
<br>

