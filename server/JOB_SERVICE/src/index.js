const express = require('express');
const bodyParser = require('body-parser'); 
const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const cors = require('cors');
// const db = require('./models/index')

const setupServer = async () => {
    
    //Create express object
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    // If any incoming request has /api,it's gonna map to ApiRoutes
    app.use('/jobservice/api', ApiRoutes);

    app.listen(PORT,() => {
        console.log(`Server started at ${PORT}`);
        // Uncomment below line when you make any changes in associations and all
        // db.sequelize.sync({alter:true});
    });
}

setupServer(); 