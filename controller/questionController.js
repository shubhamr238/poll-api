const mongoose = require('mongoose');

const Question=require('../models/question');

//addQuestion Controller
module.exports.addQuestion = function(req,res){
    // Add Question to Database
    Question.create(req.body, function(err, question){
        if(err){
            console.error(err);
            return  res.redirect('/');
        }
        return  res.json({question});
    });
};
