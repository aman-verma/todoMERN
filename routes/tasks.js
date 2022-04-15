const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Task = require('../models/Task');

// @route    GET  api/taks
// @desc    Get all tasks of user
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
});

// @route    POST  api/tasks
// @desc    add new task
// @access Private
router.post(
  '/',
  [
    auth,
    [
      check('title', 'title is required').not().isEmpty(),
      check('from').custom((value) => {
        let enteredDate = new Date(value);
        let todaysDate = new Date();
        if (enteredDate < todaysDate) {
          throw new Error('Start date cannot be in past');
        }
        return true;
      }),
      check('to').custom((value, { req }) => {
        let enteredDate = new Date(value);
        let startDate = new Date(req.body.from);
        if (startDate > enteredDate) {
          throw new Error('End date cannot be in lesser than Start Date');
        }
        return true;
      }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, from, to, status } = req.body;

    try {
      const newTask = new Task({
        title,
        description,
        from,
        to,
        status,
        user: req.user.id,
      });

      const task = await newTask.save();

      res.status(200).json(task);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    PUT  api/tasks
// @desc    update task
// @access Private
router.put('/:id', auth, async (req, res) => {
  const { title, description, from, to, status } = req.body;

  //build contact object
  const taskFields = {};
  if (title) taskFields.title = title;
  if (description) taskFields.description = description;
  if (from) taskFields.from = from;
  if (to) taskFields.to = to;
  if (status) taskFields.status = status;
  try {
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }
    // Make sure user owns contact
    if (task.user.toString() != req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    contact = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: taskFields },
      { new: true }
    );
    return res.status(200).json(contact);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route    DELETE  api/tasks
// @desc    delete task
// @access Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }
    // Make sure user owns contact
    if (task.user.toString() != req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    await Task.findByIdAndRemove(req.params.id);
    return res.status(200).json({ msg: 'Task removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
