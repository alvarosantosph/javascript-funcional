// const { interval } = require('rxjs');
// const { map, concatAll} = require('rxjs/operators');

// interval(1000)
//     .pipe(
//         map(_ => [1, 2, 3]),
//         concatAll()
//     )
//     .subscribe(console.log)

const { XMLHttpRequest } = require('xmlhttprequest');
const { ajax } = require('rxjs/ajax');
const { map, concatAll } = require("rxjs/operators");

ajax({
    createXHR: () => new XMLHttpRequest(),
  url: "http://api.github.com/users/cod3rcursos/repos",
})
.pipe(
    map(resp => JSON.parse(rexp.xhr.responseText)),
    concatAll(),
    map(repo => repo.full_name)
)
.subscribe(console.log);
    