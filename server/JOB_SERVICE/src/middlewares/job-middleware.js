const { clientErrorCodes } = require("../utils/error-codes");
const { AUTH_SERVICE_PATH_LOCAL } = require('../config/serverConfig');
const axios = require('axios');

const validateCreateJob = (req,res,next) => {
    if(
        !req.body.companyId||
        !req.body.title||
        !req.body.skills||
        !req.body.jd
    ) {
        //If any of the body params are missing
        return res.status(clientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body to create job",
            err: "Missing mandatory fields to create a job",
        });
    }

    next();

}


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
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = {
    validateCreateJob,
    authorizeAdmin
}