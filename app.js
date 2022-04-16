const Container = require('./container')

const play = async function(){
    const arch = new Container(productos.json)
    await arch.init()

    const save = await arch.save({})
    console.log(`Item con id ${save}`)

    const unId = arch.getById(1)

    const todos = arch.getAll()
    console.log(`${todos}`)

    //const borrarUno = arch.deleteById(2)

    //const borrarTodos = arch.deleteAll()
}

play()