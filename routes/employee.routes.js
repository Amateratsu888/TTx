const router = require('express').Router()
const employeeController = require('../controllers/employee.controller')

router.get('/getEmployees', employeeController.getEmployees)
router.post('/postNewEmployee', employeeController.postNewEmployee)
router.put('/recordEmployeeArrived/:id', employeeController.recordEmployeeArrived)
router.put('/recordEmployeeGone/:id', employeeController.recordEmployeeGone)
router.delete('deleteEmployee/:id', employeeController.deleteEmployee)

module.exports=router