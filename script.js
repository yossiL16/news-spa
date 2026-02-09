const url = "https://gnews.io/api/v4/top-headlines?category=general&lang=he&country=il&max=10&apikey=4197d026dd0852483b637264d3ae35c5"

let pages = document.querySelector(".pages");
let pages2 = document.getElementById("pages2");
let main = document.querySelector(".pages-main");
let home = document.querySelector(".home")
let containerStory = document.querySelector(".container-story")
let btnStory = document.querySelector(".create-story")


function getNews(){
  pages.innerHTML = ""  
  let res = localStorage.getItem('data')
  let data = JSON.parse(res)
  data.forEach(element => {
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
  let res = localStorage.getItem('data')
  let data = JSON.parse(res)
  data.forEach(element => {
    if (element.id === item) {
      pages.innerHTML = element.content
    }
  })
}

getNews()

document.querySelector('button').onclick = () => {
    getNews()
};

async function getRes() {
  if (localStorage.getItem('data') === null) {
    const res = await fetch(url);
  const data = await res.json()
  localStorage.setItem('data', JSON.stringify(data.articles))
  return
  } else {
    const data1 =  JSON.parse(localStorage.getItem("data"))
    return
  }
}

btnStory.addEventListener("click", () => {
  console.log("story");
  // pages.style.display = "none";
  // containerStory.style.display = "block"
  pages.innerHTML = `
                  <div class="container-story">
                    <h2 class="title-story">create new story</h2>
                    <form>
                        <label class="title-text" for="title">Title:</label><br>
                        <input class="input-title" type="text" id="title" name="title" value="enter a title"><br><br>

                        <label class="title-text" for="avatar">apend image:</label>
                        <input class="fild" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" /><br><br>

                        <label class="title-text" for="lname">Text:</label><br>
                        <input class="input-text" type="text" id="lname" name="lname" ><br><br>

                        <input class="btn-send" type="submit" value="send">
                    </form> 
                </div>
  `
})


// function createNewStory(){
//   pages.innerHTML = "" 


// }