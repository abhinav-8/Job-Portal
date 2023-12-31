const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require('./routes/index');
const cors = require('cors');
// const db = require('./models/index')

const setupServer = async() => {

    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/applicationservice/api', ApiRoutes);
    
    app.listen(PORT ,() =>{
        console.log(`Server started at port ${PORT}`);
        // db.sequelize.sync({alter:true});
    });

}

setupServer();