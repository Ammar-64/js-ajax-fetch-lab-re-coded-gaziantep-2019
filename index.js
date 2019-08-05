const baseURL = 'https://api.github.com/';
const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
const user_repo = 'ammar-64/js-ajax-fetch-lab';
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '6c65fa3591ae36aa9e8f1af7cf31b2e5a5e1b47a';
}
const token = getToken();
function forkRepo() {
  fetch(`https://api.github.com/repos/${repo}/forks`,{
    headers: {
    Authorization: `token ${token}`;
  }
})
  .then(res => res.json())
  .then(json => console.log(res););
  })
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  fetch(`${baseURL}/repos/${user_repo}/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json())
    .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`${baseURL}/repos/${user_repo}/issues`.{
    headers: {
      authorization: `token ${token}`
    }
  }).then(res => response.json())
  .then(json => console.log(json);)
}
