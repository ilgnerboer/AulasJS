function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('')
            resolve()
        }, tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando Promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 3...'))

async function executar() {
    await esperarPor(1500)
    console.log('Async/Await 1...')
    
    await esperarPor(1500)
    console.log('Async/Await 2...')
    
    await esperarPor(1500)
    console.log('Async/Await 3...')
}

executar()