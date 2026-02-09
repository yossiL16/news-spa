const url = "https://gnews.io/api/v4/top-headlines?category=general&lang=he&country=il&max=10&apikey=943c073d37c6ed2928e7b5b197a38530"

let pages = document.querySelector(".pages");
let pages2 = document.getElementById("pages2");
let main = document.querySelector(".pages-main");


async function getNews(){
  pages.innerHTML = ""
  const res = await fetch(url)
  const data = await res.json()
  
  data.articles.forEach(element => {
    pages.innerHTML += `
    <div class="page" onclick="changePage('${element.id}')">
        <div class="top">
            <img class="image" src=${element.image} alt="aaa">
            <div>
                <p class="name">${element.source.name}</p>
                <h1 class="title">${element.title}</h1>
            </div>
        </div>
        <p class="summary">${element.description}</p>
    </div>
    `
  })
}

async function changePage(item){
  const res = await fetch(url);
  const data = await res.json()  
  data.articles.forEach(element => {
    if (element.id === item) {
      pages.innerHTML = element.content
    }
  })
}

getNews()

document.querySelector('button').onclick = () => {
    console.log("button");
    getNews()
};