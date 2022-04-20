const myPromisse = (data = null) => new Promise((resolve, reject) => {
    return setTimeout(() => {
        if(data){
            resolve(data)
        }else{
            reject('deu ruim')
        }
        
    }, 2000)
})

const exec = async () => {
    try {
        const teste = await myPromisse('')
        console.log(teste)
    } catch (error) {
        console.warn(error)
    }
}
exec()