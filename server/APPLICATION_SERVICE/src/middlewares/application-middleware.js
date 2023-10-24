const { clientErrorCodes } = require("../utils/error-codes");
const { AUTH_SERVICE_PATH_LOCAL } = require('../config/serverConfig');
const axios = require('axios');

const authenticateUser =  async (req, res, next) => {
    try {
        const response = await axios.get(
            `${AUTH_SERVICE_PATH_LOCAL}/api/v1/isAuthenticated`,{
              headers: {
                'Authorization': req.headers['authorization'],
              },
            }
          );
        console.log(response);
        if (response.data.success) {
          next();
        } else {
          return res.status(clientErrorCodes.UNAUTHORISED).json({
            message: "Unauthorized",
          });
        }
      } catch (error) {
        return res.status(clientErrorCodes.UNAUTHORISED).json({
          message: "Unauthorized",
        });
      }
};

const authorizeAdmin =  async (req, res, next) => {
    try {
      const response = await axios.get(
        `${AUTH_SERVICE_PATH_LOCAL}/api/v1/isAdmin`,{
          headers: {
            'Authorization': req.headers['authorization'],
          },
        }
      );
      if (response.data.success) {
        next();
      } else {
        return res.status(clientErrorCodes.UNAUTHORISED).json({
          message: "Unauthorized",
        });
      }
    } catch (error) {
      console.log('Error from job middleware',error);
      return res.status(clientErrorCodes.UNAUTHORISED).json({
        message: "Unauthorized",
      });
    }
  };
module.exports = {
    authenticateUser,
    authorizeAdmin
}