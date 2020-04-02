const mongoose=require('mongoose');

//defining the schema
const OptionSchema=new mongoose.Schema({
   
    text:{
        type: String,
        required: true
    },
    votes:{
        type: Number,
        required: true
    },
    link_to_vote:{
        type: String,
    }
});

const Option = mongoose.model('Option', OptionSchema);
module.exports= Option;