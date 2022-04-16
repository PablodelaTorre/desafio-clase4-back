const fs = require('fs')

class Container {
    constructor(archivo){
        this.arch = archivo
        this.numId = 0
        this.lista = []
    }
    async init(){
        try {
            const data = await fs.promises.readFile(this.arch)
            this.lista = JSON.parse(data)
            this.lista.forEach(i => {
                if(i.id > this.numId) this.numId = i.id
            })
        }
        catch (error){
            console.log("Archivo no encontrado")
        }    
    }
    async write(){
        try {
            const string = JSON.stringify(this.lista)
            await fs.promises.writeFile(this.arch, string)
        }
        catch(err) {
            console.log(err)
        }
    }
}