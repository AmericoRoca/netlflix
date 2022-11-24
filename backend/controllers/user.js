' use strict'

var bcrypt = require('bcrypt-nodejs');
const { readdirSync } = require('fs');
var User = require('../models/user');
var jwt = require('../services/jwt');

function test(req,res){
    res.status(200).send({
        message:"Testing controller action of the user"
    });

}

function saveUser(req,res){
    var user = new User();

    var params = req.body;

    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = 'null';

    if(params.password){
        //encrypt password and save data
        bcrypt.hash(params.password, null, null, function(err,hash){
            user.password = hash;
            if(user.name != null && user.surname != null && user.email != null){
                //save the user
                user.save((err, userStored)=> {
                    if(err){
                        res.status(500).send({message:"Error when save the user"});
                    } else {
                        if(!userStored){
                            res.status(404).send({message:"User doesn´t exist"});
                        } else {
                            res.status(200).send({user: userStored});
                        }
                    }
                });
            } else {
                res.status(200).send({message: "Type all the fields"});
            }
        });
    } else {
        res.status(500).send({message: "Type the password"});
    }
}

function loginUser(req,res){

    var params = req.body;
    
    var email = params.email;
    var password = params.password;

    User.findOne({ email: email.toLowerCase()}, (err, user) =>{
        if(err){
            res.status(500).send({mesage: "Error in the request"});
        } else {
            if(!user){
                res.status(404).send({mesage: "User doesn´t exists"}); 
            } else {
                //check password
                bcrypt.compare(password, user.password, function(err, check){
                    if(check){
                        //return data of logged user
                        if(params.gethash){
                            // return jwt token
                            res.status(200).send({
                                token: jwt.createToken(user)
                            });
                        } else {
                            res.status(200).send({user});
                        }
                    } else {
                        res.status(404).send({message:"User can't log in"});
                    }
                });
            }
        }
        
    });
}

module.exports = {
    test,
    saveUser,
    loginUser
};