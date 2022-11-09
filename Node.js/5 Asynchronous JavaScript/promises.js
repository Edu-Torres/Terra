// Promise
// Object that holds the eventual result of an asynchronous operation
// States: pending, resolved, rejected

const p = new Promise((resolve, reject) => {
  // Kick off some async work
  // ...
  setTimeout(() => {
    const answer = 1;
    if (answer === 1) resolve(1); // Result of our operation
    else reject(new Error("message error")); // Reject
  }, 2000);
});
p.then((result) => console.log(result)).catch((err) =>
  console.log(err.message)
);

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

getUser(1)
  .then(u => getRepositories(u.username))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log(commits[0]))
  .catch(err => console.log(err.message));
// Always catch so if any of the three gives an error it will be handled by that last catch