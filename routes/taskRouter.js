const express = require("express")
const {createTask, getAllTasks,getSpecificTask, deleteTask,updateTask} = require('../controllers/taskControllers')

const router = express.Router()

router.post('/POST/v1/tasks', createTask)
router.get('/GET/v1/tasks', getAllTasks)
router.get('/GET/v1/tasks/:id', getSpecificTask)
router.delete('/DELETE/v1/tasks/:id', deleteTask)
router.put('/PUT/v1/tasks/:id', updateTask)

module.exports = router