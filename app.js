
const github = new Github
const ui = new UI
const getText = document.querySelector('#searchUser');

getText.addEventListener('keyup', (e) => {
  //get input text
  const userText = e.target.value

  if(userText !== ''){
    //make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        //show alert
        ui.showAlert('User Not Found', 'alert alert-danger');
      }else{
        //show profile
        ui.showProfile(data.profile)
        ui.showRepos(data.repos)
      }
    })
  }else{
    //clear profile
    ui.clearProfile();
  }
});