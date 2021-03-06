//app/routes/users.js
'use strict';

var mongoose        = require('mongoose');
var User            = require('../models/user');

module.exports = function(router) {

  router.route('/users')
  .get(function(req, res, next) {
    // Logic for GET /users routes
    console.log('Getting all the users...');
    User.find(function(err, users) {
      if (err) {
        return next(err);
      }

      res.json(users);
    });
  })
  .put(function(req, res, next) {
    // created new user
    console.log('creating the user...');
    var user = new User(req.body);
    console.log(user);
    user.save(function(err) {
      if (err) {
        return next(err);
      }
      res.send({ message: 'User Created!' });
    });

  });

  router.route('/users/:userId')
  .get(function(req, res, next) {
    // Return user
    console.log('Getting a user...' + req.params.userId);
    User.findOne({ userId: req.params.userId }, function(err, user) {
      if (err) {
        return next(err);
      }

      res.json(user);
    });
  })
  .post(function(req, res, next) {
    // updated user
    console.log('Updating user...'+ req.params.userId);
    User.findOne({ userId: req.params.userId }, function(err, user) {
      if (err) {
        return next(err);
      }
      
      console.log(user);
      for (var prop in req.body) {
        user[prop] = req.body[prop];
      }

      console.log(user);
      // save the movie
      user.save(function(err) {
        if (err) {
          return next(err);
        }

        res.json({ message: 'User updated!' });
      });
    });
  })
  .delete(function(req, res, next) {
    // Delete record
    console.log('Deleting user...'+ req.params.userId);
    User.findOneAndRemove({userId: req.params.userId}, function(err, user) {
       if (err) {
        return next(err);
      }

      res.json({ message: 'User deleted!' });
    });
  });

};
