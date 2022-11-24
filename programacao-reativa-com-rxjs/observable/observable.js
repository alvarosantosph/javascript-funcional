const { Observable } = require('rxjs');

const promise = new Promise(resolve => {
    resolve('Promise é bem legal!');
});

promise.then(console.log);

const obs = new Observable(subscriber => {
    subscriber.next('Observer');
    subscribe.complete();
});

obs.subscribe(console.log);