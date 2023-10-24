const express = require('express');
const { ApplicationController} = require('../../controllers/index');
const { ApplicationMiddleware } = require("../../middlewares/index");
const router = express.Router();

router.post('/applications',ApplicationMiddleware.authenticateUser, ApplicationController.create); //Authenticated user
router.get('/applied/:userId/:jobId',ApplicationController.alreadyApplied);
router.get('/applications/:id',ApplicationMiddleware.authorizeAdmin, ApplicationController.get); //Admin
router.delete('/applications/:id',ApplicationMiddleware.authorizeAdmin, ApplicationController.destroy); //admin
router.get('/applications', ApplicationMiddleware.authorizeAdmin,ApplicationController.getAll);//admin

module.exports = router;