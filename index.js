const express = require("express")
const app = express()
const cors = require("cors")


require("dotenv").config({ path: "./config/.env" })
require("./config/db_connect")


const employeeRoutes = require('./routes/employee.routes') 

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.use('/admin', employeeRoutes )


// server
app.listen(process.env.PORT, () => {
    console.log(`Server connected to http://localhost:${process.env.PORT}`);
})