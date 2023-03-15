const express = require('express')
const router = express.Router()
const swaggerUI = require('swagger-ui-express'); // Swagger UI

const timesheetSwagger = require('/swagger.json'); // Timesheet Swagger Document
const options = {}

router.use('/timesheet', swaggerUI.serveFiles(timesheetSwagger, options), swaggerUI.setup(timesheetSwagger)); // Swagger UI Timesheet

module.exports = router
