'use strict'

var path = require('path');
var fs = require('fs');
var pagination = require('mongoose-pagination');

const Movies = require('../models/movies');

function getMovie(req,res){
    var movieId = req.params.id;

    Movies.findById(movieId, (err, movie) =>{
        if(err){
            res.status(500).send({message: "Request error"});
        } else {
            if(!movie){
                res.status(404).send({message: "Movie doesn´t exists"});
            } else {
                res.status(200).send({movie});
            }
        }
    });
    
}

function getMovies(req,res){

    if(req.params.page){
        var page = req.params.page;
    } else {
        var page = 1;
    }
    
    var itemsPerPage = 4;

    Movies.find().sort('name').paginate(page,itemsPerPage, function(err, movies, total){
        if(err){
            res.status(500).send({message: "Error in the request"});
        } else {
            if(!movies){
                res.status(404).send({message: "Movie doesn´t exists"});
            } else {
                return res.status(200).send({pages: total,
                movies: movies});
            }
        }
    });

        
}

function saveMovie(req,res){
    var movie = new Movies();

    var params = req.body;
    movie.name = params.name;
    movie.description = params.description;
    movie.trailer = params.trailer;
    movie.img = 'null';

    movie.save((err, movieStored) =>{
        if(err){
            res.status(500).send({message: "Error when save the movie"});
        } else {
            if(!movieStored){
                res.status(404).send({message: "Artist don´t save it"});
            } else {
                res.status(200).send({movie: movieStored});
            }   
        }
    });

}

function updateMovie (req,res){
    var movieId = req.params.id;
    var update = req.body;

    Movies.findByIdAndUpdate(movieId, update, (err, movieUpdated) =>{
        if(err){
            res.status(500).send({message: "Error when update the movie"});
        } else {
            if(!movieUpdated){
                res.status(404).send({message: "Movie doesn´t exists"});
            } else {
                res.status(200).send({movie: movieUpdated});
            }   
        }
    });

}

function deleteMovie (req,res){
    var movieId = req.params.id;

    Movies.findByIdAndRemove(movieId, (err, movieRemoved) =>{
        if (err){
            res.status(500).send({message: "Error when delete the movie"});
        } else {
            if(!movieRemoved){
                res.status(404).send({message: "Movie can´t delete"});
            } else {
                res.status(200).send({movieRemoved});
            }
        }
    });
}

function uploadImage (req,res){
    var movieId = req.params.id;
    var file_name = 'not uploaded';

    if (req.files){

        var file_path = req.files.image.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[3];
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];
        
        

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif' || file_ext == 'jpeg'){

            

            Movies.findByIdAndUpdate(movieId, {image: file_name}, (err, movieUpdated) =>{
                if(!movieUpdated){
                    res.status(404).send({message: "Can´t update the movie"});
                } else {
                    res.status(200).send({movie: movieUpdated});
                    console.log(file_path);
                    console.log(file_split);
                    console.log(file_name);
                    console.log(file_ext);
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
    var path_file = 'backend/uploads/movies/'+imageFile;

    if(fs.existsSync(path_file)){
       
        res.sendFile(path.resolve(path_file));
        
    } else {
        res.status(404).send({message: "Image not found "+imageFile});
    }

}

module.exports = {
    getMovie,
    getMovies,
    saveMovie,
    updateMovie,
    deleteMovie,
    uploadImage,
    getImageFile
}