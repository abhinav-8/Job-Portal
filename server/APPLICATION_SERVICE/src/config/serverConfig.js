const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    JOB_SERVICE_PATH_LOCAL: process.env.JOB_SERVICE_PATH_LOCAL,
    AUTH_SERVICE_PATH_LOCAL: process.env.AUTH_SERVICE_PATH_LOCAL,
}