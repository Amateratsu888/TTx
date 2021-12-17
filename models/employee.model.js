const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    employee_name : {
        type:String,
        required:true
    },
    arriving_time :{
        type: String,
        required : false,
        default : 'MISSING'
    },
    departure_time : {
        type: String,
        required : false,
        default : 'MISSING'
    },
    isArrived: {
        type: Boolean,
        default: false
    },
    isGone: {
        type: Boolean,
        default: false
    }
},
{
timestamps: true,
})

module.exports = mongoose.model("Employee", employeeSchema);