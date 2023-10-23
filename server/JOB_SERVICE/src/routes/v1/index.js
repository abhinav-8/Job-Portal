const express = require('express');
const { CompanyController, JobController} = require('../../controllers/index');
const { JobMiddleware } = require("../../middlewares/index");
const router = express.Router();


router.post('/companies',JobMiddleware.authorizeAdmin, CompanyController.create); //admin
router.get('/companies/:id', CompanyController.get);
router.patch('/companies/:id',JobMiddleware.authorizeAdmin, CompanyController.update); //admin
router.delete('/companies/:id',JobMiddleware.authorizeAdmin, CompanyController.destroy); //admin
router.get('/companies',CompanyController.getAll);

router.post('/jobs',JobMiddleware.authorizeAdmin,JobMiddleware.validateCreateJob,JobController.create); //admin
router.get('/jobs/:id',JobController.get);
router.get('/jobs',JobController.getAll);
router.patch('/jobs/:id',JobController.update); //admin
router.delete('/jobs/:id',JobMiddleware.authorizeAdmin,JobController.destroy); //admin





module.exports = router;