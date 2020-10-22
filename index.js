const express = require('express') // estamos utilizando express en nuestro proyecto
const cors = require('cors')
const bodyParser = require('body-parser')
const {conectDB} = require('./db')
const app = express() //Se convierte a la constante express en un objeto, con le cual vamos a poder trabajar

app.use(cors())
app.use(bodyParser.json())
conectDB() //estamos ejecutando el modulo de nuestra conexion a la base de datos.

require('./routes/user')(app)

app.listen(3000, () =>{
    console.log('El servidor se levanto')
})
