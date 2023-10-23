const {CompanyService} = require("../services/index");
const {serverErrorCodes,successCodes} = require("../utils/error-codes");

const companyService = new CompanyService();

//POST -> /companies
const create = async (req,res) => {
    try {
        const response = await companyService.create(req.body);
        return res.status(successCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully created company',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t create company',
            err: error
        });
    }
}

//GET -> /companies/:id
const get = async (req,res) => {
    try {
        const response = await companyService.get(req.params.id);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched company',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t fetch company',
            err: error
        });
    }
} 

//GET -> /companies
const getAll = async (req,res) => {
    try {
        const response = await companyService.getAll(req.query);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched companies',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t fetch companies',
            err: error
        });
    }
}

//PATCH -> /companies/:id
const update = async (req,res) => {
    try {
        const response = await companyService.update(req.params.id, req.body);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully updated company',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t update company',
            err: error
        });
    }
} 

//DELETE -> /companies/:id
const destroy = async (req,res) => {
    try {
        const response = await companyService.destroy(req.params.id);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted company',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t delete company',
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