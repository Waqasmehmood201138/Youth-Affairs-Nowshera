const mongoose = require('mongoose');
const eventShema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    categories:{
        type:String,
        required:true
    }
    ,
    description:{
        type:String,
    },
    image:{
        type:String,
        required:true
    }
} , {timestamps:true}
)

module.exports = mongoose.model('Event', eventShema);