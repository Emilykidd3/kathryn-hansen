const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventsSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },

    address: {
        type: String,
        trim: true
        },

    city: {
        type: String,
        required: true,
        trim: true
        },

    state: {
        type: String,
        required: true,
        trim: true
        },
        
    zip: {
        type: String,
        trim: true
        },
    
    date: {
        type: String,
        required: true
        },
    startTime: {
        type: String,
        default: (new Date()).getTime() 
        },
    endTime: {
        type: String,
        default: (new Date()).getTime(), 
        // default: startTime + 2 
        },
    link: {
        type: String,
        },
    });

const Events = mongoose.model('Events', eventsSchema);

module.exports = Events;