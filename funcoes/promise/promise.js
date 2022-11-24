setTimeout(() => {
    
    console.log('Executando callback');

    setTimeout(() => {

        console.log("Executando callback");

            setTimeout(() => {

                console.log("Executando callback");

            }, 2000);

    }, 2000);

}, 2000);


let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3);
})

p.then(function(data) {
    console.log(data);
});

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...');
            resolve('Visshhhhh');
        }, tempo);
    })
}

let p = esperarPor(3000).then(texto => console.log(texto));