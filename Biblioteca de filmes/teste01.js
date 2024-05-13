function buscarDados(){
  return new Promise((resolve, reject) => {
    const numeroAleatorio = Math.random()
    
    if(numeroAleatorio >0.5){
      resolve({
        nome:'Jorge',
        idade: Math.floor(80*Math.random())
      })
    }
    reject(new Error('Error obtaining'))
  })
}

async function obterDados() {
  try {
    const data = await buscarDados()
    console.log(data)
  } catch(error) {
    console.error(error.message)
  }
}

obterDados()