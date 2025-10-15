console.log("Hola mundo");
const { hi } = require("./app")
const objModulo = require("./modulo2")

console.log(hi())
console.log(objModulo.saludo())

//setInterval(hi, 1000);
setTimeout(hi, 2000)
console.log("he instalado nodemon")