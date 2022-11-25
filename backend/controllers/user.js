' use strict'

var bcrypt = require('bcrypt-nodejs');
const { readdirSync } = require('fs');
var User = require('../models/user');
var jwt = require('../services/jwt');
var fs = require('fs');
var path = require('path');

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

function updateUser(req,res){
    var userId = req.params.id;
    var update = req.body;

    User.findByIdAndUpdate(userId, update, (err, userUpdate) =>{
        if(err){
            res.status(500).send({message:"Error when upload the user"});
        } else {
            if(!userUpdate){
                res.status(404).send({message:"Can´t update user"});
            } else {
                res.status(200).send({user: userUpdate});
            }
        }
    });
}

function uploadImage(req,res){
    var userId = req.params.id;
    var file_name = "Don´t upload";

    if (req.files){

        var file_path = req.files.image.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[3];
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];
        
        

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif' || file_ext == 'jpeg'){

            

            User.findByIdAndUpdate(userId, {image: file_name}, (err, userUpdate) =>{
                if(!userUpdate){
                    res.status(404).send({message: "Can´t update the user"});
                } else {
                    res.status(200).send({image: file_name, user: userUpdate});
                }
            });

        } else {
            res.status(404).send({message: "Image extension not valid"}); 

        }
    } else {
        res.status(404).send({message: "Image doesn´t upload"});
    }

}

function getImageFile(req,res){

    var imageFile = req.params.imageFile;
    var path_file = 'backend/uploads/users/'+imageFile;

    if(fs.existsSync(path_file)){
       
        res.sendFile(path.resolve(path_file));
        
    } else {
        res.status(404).send({message: "Image not found "+path_file});
    }

}


module.exports = {
    test,
    saveUser,
    loginUser,
    updateUser,
    uploadImage,
    getImageFile
};