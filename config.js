const mongoose = require('mongoose')
const dbconnect = () => {
    
 ("mongodb://localhost:27017/users_prueba", {},(err,res)=>{

if (!err){
    console.log("conexion exitosa")

}
else {
    console.log("error de conexion")
}
})
}
module.exports = dbconnect;