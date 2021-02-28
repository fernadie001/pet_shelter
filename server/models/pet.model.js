const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    petName:{
        type: String,
        required: [true,"You need a name for Pet"],
        minlength: [3, "Name must be at least 3 characters"],
    },
    petType:{
        type: String,
        required:[true,"We need the breed"],
        minlength: [3,"must be at least 3 characters"]
    },
    petDescription:{
        type: String,
        required:[true,"Tell us about the Pet!"],
        minlength: [5,"must be at least 10 characters"]
    },
    skillOne:{
        type: String,
        default: ""
    },
    skillTwo:{
        type: String,
        default: ""
    },
    skillThree:{
        type: String,
        default: ""
    }
},{timestamps:true})

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet; 
