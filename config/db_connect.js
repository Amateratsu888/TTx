const mongoose = require("mongoose");


mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log("Employees database is connected"))
    .catch((error)=>console.log(`Impossible to get connection:${error}`))