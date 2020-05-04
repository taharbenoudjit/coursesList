const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Define schema
let Course = new Schema({
    name: {
        type: String
    },

    Comment:{
        type: String
    },

    importance:{
        type: String
    },

    
},{
    collection: 'courses'
})

module.exports = mongoose.model('Course', Course)