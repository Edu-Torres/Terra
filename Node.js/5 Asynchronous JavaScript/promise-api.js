// Simulate a promise resolved/rejected for Unit Tests
const p = Promise.resolve({ id: 1 });
// p.then(res => console.log(res));

// Better to create an Error for it includes the call stack
//const q = Promise.reject(new Error('reason for rejection'));
// q.catch(err => console.log(err));

// Parellel Promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => { 
        console.log('Async operation 1...');
        resolve(1);
    }, 2000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => { 
        console.log('Async operation 2...');
        resolve(2);
    }, 1999);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => { 
        console.log('Async operation 3...');
        reject(new Error('Third one failed'));
    }, 2000);
});
// Its still a single thread but it works asynchronously not waiting for a result to kick off next task
// All promises 
// Promise.all([p1, p2, p3])
//     .then(result => console.log(result))
//     .catch(err => console.log(err));
// If any promise is rejected the whole thing is considered rejected (catch)

// As soon as one is fulfilled
Promise.race([p1, p2, p3])
    .then(result => console.log(result))
    .catch(err => console.log(err));
// Result is not an rray just the first promised that was resolved