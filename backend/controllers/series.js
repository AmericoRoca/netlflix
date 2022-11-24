'use strict'

var path = require('path');
var fs = require('fs');
var pagination = require('mongoose-pagination');

const Series = require('../models/series');

function getSerie(req,res){
    var serieId = req.params.id;

    Series.findById(serieId, (err, serie) =>{
        if(err){
            res.status(500).send({message: "Request error"});
        } else {
            if(!serie){
                res.status(404).send({message: "Serie doesn´t exists"});
            } else {
                res.status(200).send({serie});
            }
        }
    });
    
}

function getSeries(req,res){

    if(req.params.page){
        var page = req.params.page;
    } else {
        var page = 1;
    }
    
    var itemsPerPage = 4;

    Series.find().sort('name').paginate(page,itemsPerPage, function(err, movies, total){
        if(err){
            res.status(500).send({message: "Error in the request"});
        } else {
            if(!serie){
                res.status(404).send({message: "Serie doesn´t exists"});
            } else {
                return res.status(200).send({pages: total,
                series: series});
            }
        }
    });

        
}

function saveSerie(req,res){
    var serie = new Series();

    var params = req.body;
    serie.name = params.name;
    serie.description = params.description;
    serie.trailer = params.trailer;
    serie.img = 'null';

    serie.save((err, serieStored) =>{
        if(err){
            res.status(500).send({message: "Error when save the serie"});
        } else {
            if(!serieStored){
                res.status(404).send({message: "Serie don´t save it"});
            } else {
                res.status(200).send({serie: serieStored});
            }   
        }
    });

}

function updateSerie (req,res){
    var serieId = req.params.id;
    var update = req.body;

    Series.findByIdAndUpdate(serieId, update, (err, serieUpdated) =>{
        if(err){
            res.status(500).send({message: "Error when update the serie"});
        } else {
            if(!serieUpdated){
                res.status(404).send({message: "Serie doesn´t exists"});
            } else {
                res.status(200).send({serie: serieUpdated});
            }   
        }
    });

}

function deleteSerie (req,res){
    var serieId = req.params.id;

    Series.findByIdAndRemove(serieId, (err, serieRemoved) =>{
        if (err){
            res.status(500).send({message: "Error when delete the serie"});
        } else {
            if(!serieRemoved){
                res.status(404).send({message: "Serie can´t delete"});
            } else {
                res.status(200).send({serieRemoved});
            }
        }
    });
}

function uploadImage (req,res){
    var serieId = req.params.id;
    var file_name = 'not uploaded';

    if (req.files){

        var file_path = req.files.image.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[3];
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];
        
        

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif' || file_ext == 'jpeg'){

            

            Series.findByIdAndUpdate(serieId, {image: file_name}, (err, serieUpdated) =>{
                if(!serieUpdated){
                    res.status(404).send({message: "Can´t update the serie"});
                } else {
                    res.status(200).send({serie: serieUpdated});
                
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
    var path_file = 'backend/uploads/series/'+imageFile;

    if(fs.existsSync(path_file)){
       
        res.sendFile(path.resolve(path_file));
        
    } else {
        res.status(404).send({message: "Image not found "+imageFile});
    }

}


function uploadTrailer(req,res){
    var serieId = req.params.id;

    var file_name = 'not uploaded';

    if (req.files){

        var file_path = req.files.image.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[3];
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];
        
        

        if (file_ext == 'mp4' || file_ext == 'mkv'){

            

            Series.findByIdAndUpdate(serieId, {trailer: file_name}, (err, serieUpdated) =>{
                if(!serieUpdated){
                    res.status(404).send({message: "Can´t update the serie"});
                } else {
                    res.status(200).send({serie: serieUpdated});
                
                }
            });

        } else {
            res.status(404).send({message: "Video extension not valid"}); 

        }
    } else {
        res.status(404).send({message: "Video doesn´t upload"});
    }
    
}

function getTrailer(req,res){

    var videoFile = req.params.videoFile;
    var path_file = 'backend/uploads/series/trailers'+videoFile;

    if(fs.existsSync(path_file)){
       
        res.sendFile(path.resolve(path_file));
        
    } else {
        res.status(404).send({message: "Video not found "+videoFile});
        console.log(videoFile);
    }

}



module.exports = {
    getSerie,
    getSeries,
    saveSerie,
    updateSerie,
    deleteSerie,
    uploadImage,
    getImageFile,
    uploadTrailer,
    getTrailer
}