const Container = require('./container')
const obj = {title:"Escuadra", price:123, id:1}

const play = async function(){
    
    
    let contenedor = new Container('./productos.txt')
    contenedor.save(obj)
    contenedor.getById(1)
    contenedor.getAll()
    // contenedor.deleteById(3)
    // contenedor.deleteAll()
} 

play()


    // const arch = new Container(productos.json)
    // await arch.init()

    // const save = await arch.save({})
    // console.log(`Item con id ${save}`)

    // const unId = arch.getById(1)

    // const todos = arch.getAll()
    // console.log(`${todos}`)

    //const borrarUno = arch.deleteById(2)

    //const borrarTodos = arch.deleteAll()