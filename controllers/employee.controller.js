const Employees = require('../models/employee.model')


//MODULE POUR VERIFIER SI L'ID EXISTE
const verifiedID = require("mongoose").Types.ObjectId


// lister les employées
module.exports.getEmployees = async (req, res) => {
    try {
    const employees = await Employees.find()
    res.status(200).json(employees);
    } catch (err) {
    res.status(500).send({ message: err });
    }
}


//enregistrer l'heure de d'arrivé d'un employé
module.exports.recordEmployeeArrived = async (req, res) => {
    if (!verifiedID.isValid(req.params.id))
    console.log(`INVALID ID : ${req.params.id}`);
try {
    await Clients.findByIdAndUpdate(
    { _id: req.params.id },
    {
        $set: {
            employee_name: req.body.employee_name,
            arriving_time: req.body.arriving_time,
            departure_time: req.body.departure_time,
            isArrived:req.body.isArrived,
        },
    },
    { new: true },
    (err, data) => {
        if (!err) res.status(200).json(data);
        else res.status(500).send({ message: err });
    }
    )
} catch (err) {
    console.log(err);
}
}


//enregistrer l'heure de depart  d'un employé
module.exports.recordEmployeeGone = async (req, res) => {
    if (!verifiedID.isValid(req.params.id))
    console.log(`INVALID ID : ${req.params.id}`);
    if (req.body.isArrived){
try {
    await Clients.findByIdAndUpdate(
    { _id: req.params.id },    
    {
        $set: {
            employee_name: req.body.employee_name,
            arriving_time: req.body.arriving_time,
            departure_time: req.body.departure_time,
            isArrived:req.body.isArrived,
            isGOne: req.body.isGone
        },    
    },    
    { new: true },
    (err, data) => {
        if (!err) res.status(200).json(data);
        else res.status(500).send({ message: err });
    }    
    )
} catch (err) {
    console.log(err);
}
}
else  res.status(505).send({ message: 'this employee do not arrived ' })
}




//ajouter un nouveau employée dans la base de donnée
module.exports.postNewEmployee = async (req, res) => {
    const { employee_name} = req.body;
    const employee = await Employees.create({employee_name})
    res.status(201).json(employee)
}


// Supprimer un employé
module.exports.deleteEmployee = async (req,res) => {
    if (!verifiedID.isValid(req.params.id))
    return res.status(404).send({ message: `INVALID ${req.params.id}` });
    else{
    await Employees.remove({ _id: req.params.id }).exec();
    return res.status(200).send({ message: "Employee removed" });
    }
}