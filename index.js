function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '6c65fa3591ae36aa9e8f1af7cf31b2e5a5e1b47a';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`,{

    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json())
  .then(json => showResults(json))
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
