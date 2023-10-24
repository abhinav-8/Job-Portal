# JobPortal's Application Service 
The Application Service is for users to apply on particular job openings.This service just for creating the application,fetching or deleting if you are an admin. 

## Setup and Installation :

- Go to `APPLICATION_SERVICE` and execute `npm install`
- Create a `.env` file in the `APPLICATION_SERVICE` directory based on file `.envExample` 
- Create a new  file `config.json` inside `src/config` folder with following json
 
```

{
  "development": {
    "username": <MYSQL_LOGIN_USERNAME>,
    "password": <PASSWORD>,
    "database": "APPLICATION_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
* Go to `APPLICATION_SERVICE/src` and execute 
  * `npx sequelize db:create`
  * `npx sequelize db:migrate`

- Go to `APPLICATION_SERVICE` and start the server by `npm start`
<br>

