function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '6c65fa3591ae36aa9e8f1af7cf31b2e5a5e1b47a';
}
const token = token();
function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch('https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks'{
    headers: {
    Authorization: getToken();
  }
})
  .then(res => res.json())
  .then(json => console.log(res););
  })
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
