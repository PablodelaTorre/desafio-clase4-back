const fs = require('fs')

class Container {
    constructor(archivo){
        this.arch = archivo
        this.numId = 0
        this.lista = []
    }
    
    async save(objeto) {
        try {
            let informacion = await fs.promises.readFile(this.arch, "utf-8")
            let informacionUtil = JSON.parse(informacion)
            console.log(informacion)
            console.log(informacionUtil)
            if (!informacionUtil.includes(objeto.id)){
                informacionUtil.push(objeto)
                console.log(informacionUtil)
                let informacionStr = JSON.stringify(informacionUtil)
                let write = await fs.promises.writeFile(this.arch, informacionStr)
                return write
            }
        } catch (error) {
            console.log('error',error)
        }
    }

    async getById(numero){
        try {
            let informacion = await fs.promises.readFile(this.arch, "utf-8")
            let informacionUtil = JSON.parse(informacion)
            informacionUtil.forEach(x => {
                if (x.id == numero){
                    console.log(x)
                    return x
                } else {
                    return null
                }
            })
        } catch (error) {
            console.log('error',error)
        }
    }

    async getAll() {
        try {
            let informacion = await fs.promises.readFile(this.arch, "utf-8")
            let informacionUtil = JSON.parse(informacion)
            console.log(informacionUtil)
            return informacionUtil
        } catch (error) {
            console.log('error',error)
        }
    }

    async deleteById(numero){
        try {
            let informacion = await fs.promises.readFile(this.arch, "utf-8")
            let informacionUtil = JSON.parse(informacion)
            informacionUtil.forEach(x => {
                if (x.id == numero){
                    let indice = indexOf(x)
                    let informacionStr =JSON.stringify(informacionUtil.splice(indice))
                    let write = fs.promises.writeFile(this.arch, informacionStr)
                    return write
                } else {
                    return null
                }
            })
        } catch (error) {
            console.log('error',error)
        }
    }

    async deletAll() {
        try {
            fs.promises.unlinkSync(this.arch)
            //file removed
            } catch(err) {
                console.error(err)
            }
    }


    // async init(){
    //     try {
    //         const data = await fs.promises.readFile(this.arch,"utf-8")
    //         this.lista = JSON.parse(data)
    //         this.lista.forEach(i => {
    //             if(i.id > this.numId) this.numId = i.id
    //         })
    //     }
    //     catch (error){
    //         console.log("Archivo no encontrado")
    //     }    
    // }
    // async write(){
    //     try {
    //         const string = JSON.stringify(this.lista)
    //         await fs.promises.writeFile(this.arch, string)
    //     }
    //     catch(err) {
    //         console.log(err)
    //     }
    // }

}

// let contenedor = new Container('./productos.txt')
// contenedor.save()