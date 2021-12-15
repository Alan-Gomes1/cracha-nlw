const linksSocialMedia = {
  github: 'Alan-Gomes1',
  youtube: 'channel/UCr0eHwX7kOLOYmObFIs9D1A',
  facebook: '',
  instagram: 'Dev_Alan.Gomes',
  twitter: ''
}
function changSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url) 
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()

function rain(){
  let amount = 200;
  let body = document.querySelector('body');
  let i = 0;
  while(i < amount){
      let drop = document.createElement('i');

      let size = Math.random() * 5;
      let posX = Math.floor(Math.random() * window.innerWidth);
      let delay = Math.random() * -20;
      let duration = Math.random() * 5;

      drop.style.width = 0.2 + size+'px';
      drop.style.left = posX + 'px';
      drop.style.animationDelay = delay+'s';
      drop.style.animationDuration = 1 + duration+'s';
      body.appendChild(drop);
      i++
  }
}

rain();