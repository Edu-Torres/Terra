// Same code as in callbacks, but with promises
function getUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log('Reading a user from DB...');
          resolve({ id: id, username: 'Eduardo' })
      }, 2000);
    })
  }
  
function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('Reading repositories from DB...');
        resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    })
}
  
function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('Reading commits from DB...');
        resolve(['commit1', 'commit2']);
        }, 2000);
    })
}
  

//Async and Await
// Any time you call a function that returns a promise, you can await that function
// and get the result
async function displayCommits() {
    // Now the only way to get the catchs is inside a try
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.username);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err) {
        console.log(err)
    }
}
// Whenever you use await you must be in a function that has async
// Because internally an async function returns a promise
// Its syntactic sugar, it is the same as promises, then, catch
displayCommits()