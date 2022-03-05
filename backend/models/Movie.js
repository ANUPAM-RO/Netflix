const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: true, 
        unique:true},
    desc:{
        type:String, 
        },
    img:{
        type:String, 
        },
    imgTitle:{
        type:String,
        
    },
    imgSm:{
        type: Boolean,
        
    },
    trailer:{
        type: Boolean,
        
    },
    video:{
        type: Boolean,
        
    },
    year:{
        type: Boolean,
        
    },
    limit:{
        type: Boolean,
        
    },
    genre:{
        type: Number,
        
    },
    isSeries:{
        type: Boolean,
        default: false
    }
},{timestamps: true}
);

module.exports = mongoose.model("Movies", MovieSchema);