const {ApplicationService} = require('../services/index');
const { serverErrorCodes, successCodes } = require("../utils/error-codes");

const applicationService = new ApplicationService();

//POST -> /applications
const create = async(req, res) => {
    try {
        const response = await applicationService.create(req.body);
        return res.status(successCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully applied to this job',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t apply to this job',
            err: error
        });
    }
}

//GET -> /applications/:id
const get = async (req,res) => {
    try {
        const response = await applicationService.get(req.params.id);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched application',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t fetch application',
            err: error
        });
    }
}

//GET -> /applications
const getAll = async (req,res) => {
    try {
        const response = await applicationService.getAll(req.query);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched applications',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t fetch applications',
            err: error
        });
    }
}

//DELETE -> /applications/:id
const destroy = async (req,res) => {
    try {
        const response = await applicationService.destroy(req.params.id);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted application',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t delete application',
            err: error
        });
    }
}

//GET -> /applied/:userId/:jobId
const alreadyApplied = async (req,res) => {
    try {
        const response = await applicationService.alreadyApplied(req.params.userId,req.params.jobId);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully checked whether user has already applied for this job',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t check whether user has already applied for this job',
            err: error
        });
    }
}

module.exports = {
    create,
    get,
    getAll,
    destroy,
    alreadyApplied
}