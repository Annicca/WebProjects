
const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
const postButton = document.querySelector(".js-post");
let IdUser;

postButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  axios(`https://jsonplaceholder.typicode.com/posts`)
      .then(({data}) => {
              data.forEach(post => {
                  if (post.userId === IdUser) {
                      console.log(post.userId);
                      resultsContainer.innerHTML += `<div class="response-container">    
                <p> Название: <span>${post.title}</span><p>
                <p> Пост: <span>${post.body}</span><p>
            </div>`
                  }
              })
          })
      .catch(e =>{
          if(e.response.status === 404){
              resultsContainer.innerHTML += `<div class="response-container">Постов нет</div>`
          }
      })
});
//1
loadBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
      .then(response => {
        if(response.status >= 200 && response.status < 300){
          return response
        }else{
            throw new Error('Пользователь не найден')
        }
      })
      .then(response => response.json())
      .then((data) =>{
          IdUser = data.id;
          resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}" alt="photo">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`
    })
    .catch(e =>{
      resultsContainer.innerHTML = `<div class = "response-container">Пользователь не найден</div>`
    })
});

