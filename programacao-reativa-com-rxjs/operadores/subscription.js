// esperar 3000
// gerar números de 500

// Depois de 10000 unsubscribe

const { timer } = require('rxjs');

const obs = timer(3000, 500);

const sub1 = obs.subscribe(num => {
    console.log(`#1 Gerou o número ${num}`);
}); 

setTimeout(() => {
    sub1.unsubscribe();
}, 10000);