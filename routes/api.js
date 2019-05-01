const express = require('express');
const moment = require('moment');

const Todo = require('../models/todo');

const router = new express.Router();

router.post('/add/todo', (req, res, next) => {
  if (req.body.title === 'undefined' || !req.body.title) {
    res.sendStatus('400');
  } else {
    const newTodo = new Todo({
      title: req.body.title,
      desc: req.body.desc,
      created: moment().format('DD MM YYYY HH:mm'),
    });
    newTodo.save( (err, docs) => {
      if (err) {
        next(err);
      } else {
        res.sendStatus(200);
      }
    });
  }
});

router.get('/list/todo', (req, res, next) => {
  Todo.find( (err, docs) => {
    if (err) {
      next(err);
    } else {
      res.json({'todos': docs});
    }
  });
});

router.post('/del/todo', (req, res, next) => {
  if (req.body.id === 'undefined' || !req.body.id) {
    res.sendStatus(400);
  } else {
    Todo.findByIdAndDelete(req.body.id, (err, docs) => {
      if (err) {
        next(err);
      } else {
        if (!docs) {
          res.sendStatus(400);
        } else {
          res.sendStatus(200);
        }
      }
    });
  }
});

module.exports = router;
