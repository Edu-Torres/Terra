// Normal blocking (synchronous) program
console.log('Before');
console.log('After');
// Asynchronous example
setTimeout(() => {
    console.log('Waited');
}, 2000)
console.log('This is after');
// This isn't multi thread we don't have concurrency, it's just asynchronous


// Callbacks
function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from DB...');
        callback({ id: id, username: 'Eduardo' })
        return
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Reading repositories from DB...');
        callback(['repo1', 'repo2', 'repo3']);
        return
    }, 2000);
}
// How to use the callback functions
// getUser(8, user => {
//     console.log('User', user)
//     getRepositories(user.username, (repos) => {
//         console.log(`Repositories of ${user.username}: ${repos}`);
//     })
// });
// A little of Callback hell
// Reading a user from DB...
// User { id: 8, username: 'Eduardo' }
// Reading repositories from DB...
// Repositories of Eduardo: repo1,repo2,repo3


// Named Functions
getUser(8, getRepos);
// Instead of using anonymous arrow functions
function getRepos(user) {
    getRepositories(user.username, displayRepos);
}

function displayRepos(repos) {
    console.log(repos);
}
// Reading a user from DB...
// Reading repositories from DB...
// [ 'repo1', 'repo2', 'repo3' ]





