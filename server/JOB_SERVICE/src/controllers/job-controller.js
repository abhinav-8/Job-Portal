const {JobService} = require('../services/index');
const { serverErrorCodes, successCodes } = require("../utils/error-codes");

const jobService = new JobService();

//POST -> /jobs
const create = async(req, res) => {
    try {
        const response = await jobService.create(req.body);
        return res.status(successCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully created job',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t create a job',
            err: error
        });
    }
}

//GET -> /jobs/:id
const get = async (req,res) => {
    try {
        const response = await jobService.get(req.params.id);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched job',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t fetch job',
            err: error
        });
    }
}

//GET -> /jobs
const getAll = async (req,res) => {
    try {
        const response = await jobService.getAll(req.query);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched jobs',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t fetch jobs',
            err: error
        });
    }
}

//PATCH -> /jobs/:id
const update = async (req,res) => {
    try {
        const response = await jobService.update(req.params.id, req.body);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully updated job details',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t update job details',
            err: error
        });
    }
} 

//DELETE -> /jobs/:id
const destroy = async (req,res) => {
    try {
        const response = await jobService.destroy(req.params.id);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted job',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t delete job',
            err: error
        });
    }
}


module.exports = {
    create,
    get,
    getAll,
    update,
    destroy,
}