const { from, Observable } = require("rxjs");

// function createPipeableOperator(nextFn) {
//   return function (source) {
//     return Observable.create((subscriber) => {
//       source.subscribe({
//         next(v) {
//           nextFn(subscriber, v)
//         },
//       });
//     });
//   };
// }

// function primeiro() {
//     return createPipeableOperator((subscriber, v) => {
//         subscriber.next(v);
//         subscriber.complete();
//     });
// }

//////////////////////////////////////////////////////////////////

// function createPipeableOperator(nextGenerator) {
//   return function (source) {
//     return Observable.create((subscriber) => {
//       source.subscribe({
//         next: nextGenerator(subscriber)
//       });
//     });
//   }
// }

// function primeiro() {
//     return createPipeableOperator(function(subscriber) {
//         return function(valor) {
//             subscriber.next(valor);
//             subscriber.complete();
//         }
//     });
// }

//////////////////////////////////////////////////////////////////

// function createPipeableOperator(operatorFn) {
//   return function (source) {
//     return Observable.create((subscriber) => {
//       source.subscribe(operatorFn(subscriber));
//     });
//   }
// }

// function primeiro() {
//   return createPipeableOperator(subscriber => ({
//     next(v) {
//         subscriber.next(v);
//         subscriber.complete();
//     }
//   }));
// }

// function nenhum() {
//     return createPipeableOperator((subscriber) => ({
//         next(v) {
//         subscriber.complete();
//         },
//     }));
// }

// function ultimo() {

//     let ultimo;

//     return createPipeableOperator((subscriber) => ({
//         next(v) {
//           ultimo = v;
//         },
//         complete() {
//           if (ultimo !== undefined) {
//             subscriber.next(ultimo);
//           }
//           subscriber.complete();
//         },
//     }));
// }

//////////////////////////////////////////////////////////////////

function createPipeableOperator(operatorFn) {
  return function (source) {
    return Observable.create((subscriber) => {
      const sub = operatorFn(subscriber);
      source.subscribe({
        next: sub.next,
        error: sub.error || (e => subscriber.error(e)),
        complete: sub.complete || (e => subscriber.complete(e))
      });
    });
  }
}

function primeiro() {
  return createPipeableOperator(subscriber => ({
    next(v) {
        subscriber.next(v);
        subscriber.complete();
    }
  }));
}

function nenhum() {
    return createPipeableOperator((subscriber) => ({
        next(v) {
        subscriber.complete();
        },
    }));
}

function ultimo() {

    let ultimo;

    return createPipeableOperator((subscriber) => ({
        next(v) {
          ultimo = v;
        },
        complete() {
          if (ultimo !== undefined) {
            subscriber.next(ultimo);
          }
          subscriber.complete();
        },
    }));
}

from([1, 2, 3, 4, 5])
    .pipe(
        primeiro(),
        //nenhum(),
        //ultimo()
    )
    .subscribe(console.log);


