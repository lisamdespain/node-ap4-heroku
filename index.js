require('dotenv').config();

const server = require('./api/server');

console.log('process.env.PORT:', process.env.PORT);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

// function someProcedure(a) {
//     if (a == 1) {
//         return 5;
//     } else if (a ==2 ){
//         return 10;
//     }
//     throw new Error('a should be 1 or 2');
// }
// // will generate a stack trace so you can find the error
// try{
//     console.log('my result is:', someProcedure(3))
// } catch(error) {
//     console.log('I got an exception:', error.message )
// }

// function f() {
//     return 5;
// }

// function g(){
//     setTimeout(()=> console.log(blah), 1000);
//     return 5;
// }
// // callback version
// function after1second(callback){
//     setTimeout(callback, 1000);
    
// }
// after1second(()=> console.log('it worked!'));

// function after1SecondPromise(){
//     return new Promise(resolve =>{
//         setTimeout(resolve, 1000);
//     })
// }

// // the older way
// after1SecondPromise()
//     .then(()=> console.log('it worked'))
//     .then(after1SecondPromise)
//     .then(console.log('etc.'))
//     .catch(err => console.log(err))
// // the newer way - if return from here, will eventually return 42 (not right away)
// async function thing(){
//     try {
//         await after1SecondPromise();
//         console.log('it worked!');
//         await after1SecondPromise();
//         console.log('it worked!');
//         await after1SecondPromise();
//         console.log('it worked!');
//         await after1SecondPromise();
//         console.log('it worked!');
//         return 42;
//     } catch(err){
//         console.log(err)
//     }
// }

// thing();

