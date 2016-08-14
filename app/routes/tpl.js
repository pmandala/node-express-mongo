//app/routes/users.js
'use strict';

module.exports = function(router) {

  /*router.route('/users')
  .get(function(req, res, next) {
    // Logic for GET /users routes
    res.send({ message: 'Successfully returned all users' });
  })
  .put(function(req, res, next) {
    // created new user
    console.log(req.body);
    res.send({ message: 'Successfully created new user' });
  });

  router.route('/users/:userId')
  .get(function(req, res, next) {
    // Return user
    console.log(req.params.userId);
    res.send({ message: 'Successfully returned a user' });
  })
  .post(function(req, res, next) {
    // updated user
    console.log(req.params.userId);
    console.log(req.body);
    res.send({ message: 'Successfully updated user' });
  })
  .delete(function(req, res, next) {
    // Delete record
    console.log(req.params.userId);
    res.send({ message: 'Successfully deleted user' });
  });*/

};



//var User            = require('../app/models/user-json');



/*router.get('/users', function(req, res) {
    var userModel = new User();
    res.json(userModel.getUsers());
});

router.route('/user').post(function(req, res) {
    var userModel = new User();
    userModel.add(req.body, function(err) {
          if (err) {
            return res.send(err);
          }

          res.send({ message: 'User Added' });
    });
});

router.route('/user/:id').put(function(req,res){
  res.send({ message: 'user updated' });

});

router.route('/user/:id').get(function(req, res) {
    var userModel = new User();
    userModel.findUserById(req.params.id, function(err, item){
        if (err) {
          return res.send(err);
        }
        res.json(item);
    });
});

router.route('/user/:id').delete(function(req, res) {
  res.send({ message: 'Successfully deleted' });
});

*/