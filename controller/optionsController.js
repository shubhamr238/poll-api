const mongoose = require('mongoose');

const Question=require('../models/question');
const Option=require('../models/option');

//addOption Controller
module.exports.addOption = async function(req,res){
    // Add Question to Database
    try {
        //console.log(req.params.id);
        let question =await Question.findById(req.params.id);
        //console.log(question);
        if(question){
            let option = await Option.create({
                text:req.body.text,
                votes:req.body.votes,
                question:req.params.id
            });
            // console.log(option);
            option.link_to_vote="http://localhost:8000/options/"+option.id+"/add_vote";
            option.save();
            question.options.push(option);
            question.save();
            return res.json({option, data:{"message": "Option Created Sucessfully!"}});
        }
        return res.json({question});

    } catch (error) {
        console.log(error);
        return;
    }
};

