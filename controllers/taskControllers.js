const mongoose = require('mongoose')
const Task = require('../models/TaskModel')
let number = 0;
let tasks = []

const createTask = async (req, res) => {
    const {title, is_completed} = req.body;
    try{
        const newTask = await Task.create({title, is_completed})
        
        res.status(200).json({id : number})
        number++;
    }
    catch(error){
        res.status(400).json({error : error.message})
    }
}

const getAllTasks = async (req, res) => {
    
    const createdtasks = await Task.find({}).sort({createdAt : -1})
    res.status(200).json({tasks : [{id : number, ...createdtasks}]})
    number++
}

const getSpecificTask = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({"error": "invalid ID"})
    }
    const task = await Task.findOne({_id : id})
    if(!task){
        res.status(400).json({"error": "There is no task with such Id"})
    }
    res.status(200).json(task)
}

const deleteTask = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({"error": "invalid ID"})
    }
    const task = await Task.findOneAndDelete({_id : id})
    if(!task){
        res.status(400).json({"error": "There is no task with such Id"})
    }
    res.status(200).json({"message" : "deleted"})
}

const updateTask = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({"error": "invalid ID"})
    }
    const task = await Task.findOneAndUpdate({_id : id},{
        ...req.body
    })
    if(!task){
        res.status(400).json({"error": "There is no task with such Id"})
    }
    res.status(200).json()
}


module.exports = {
    createTask,
    getAllTasks,
    getSpecificTask,
    deleteTask,
    updateTask,
    
}