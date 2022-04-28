import fs from "fs"

fs.writeFileSync("./src/resources/texto.txt", "un texto\n")
fs.appendFileSync('./src/resources/texto.txt', 'nuevo Texto\n')
const datos = fs.readFileSync("./src/resources/texto.txt", "utf-8")
console.log(datos)
