const express = require('express');
const { createEmployee, updateEmployee, getEmployees, getEmployeeAudit, deleteEmployee } = require('../controllers/employeeController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/', auth, getEmployees);
router.post('/', auth, createEmployee);
router.put('/:id', auth, updateEmployee);
router.delete('/:id',auth, deleteEmployee)
router.get('/:id/audit', auth, getEmployeeAudit);

module.exports = router;