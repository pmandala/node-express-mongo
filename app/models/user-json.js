var users = require('./users-json.json');
var fs = require('fs');

var User = function () {
    this.data = users;
    console.log(JSON.stringify(this.data));
}

User.prototype.getUsers = function() {
	return this.data;
}

User.prototype.findUserById = function (id, callback) {

	var user = null;

	for(var i=0; i<this.data.length; i++){
		if(this.data[i].id == id){
			user = this.data[i];
			break;
		}
	}

    if(user){
    	callback(null, user);
    }
    else{
    	callback('User not found');
    }
};

User.prototype.add = function (user, callback) {
	user.id = this.data.length+1;
	this.data.push(user);
	console.log(JSON.stringify(this.data, null, 4));

	fs.writeFile('./app/models/users.json', JSON.stringify(this.data, null, 4), 'utf8', function (err) {
	  	if(err)
	  		callback(err);

	  	callback(null);
	});
};

module.exports = User;
