const mongoose = require('mongoose');

const database = "petshelter";
mongoose.connect(`mongodb://localhost/${database}`,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(res => console.log('You are in the mainframe, success.'))
    .catch(err => console.log('Error is right here, ${err}'))