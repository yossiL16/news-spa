const url = "https://gnews.io/api/v4/top-headlines?category=general&lang=he&country=il&max=10&apikey=4197d026dd0852483b637264d3ae35c5"

let pages = document.querySelector(".pages");
let pages2 = document.getElementById("pages2");
let main = document.querySelector(".pages-main");
let home = document.querySelector(".home")
let containerStory = document.querySelector(".container-story")
let btnStory = document.querySelector(".create-story")
// let form = document.querySelector("#form")





function getNews() {
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

async function changePage(item) {
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
    const data1 = JSON.parse(localStorage.getItem("data"))
    return
  }
}

btnStory.addEventListener("click", () => {
  pages.innerHTML = `
                  <div class="container-story">
                    <h2 class="title-story">create new story</h2>
                    <form id="form">
                        <label class="title-text" for="title">Title:</label><br>
                        <input class="input-title" type="text" id="title" name="title" ><br><br>

                        <label class="title-text" for="avatar">apend image:</label>
                        <input class="fild" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" /><br><br>

                        <label class="title-text" for="lname">Text:</label><br>
                        <input class="input-text" type="text" id="lname" name="lname" ><br><br>

                        <input class="btn-send" id="test" type="submit" value="send">
                    </form> 
                </div>
  `
  document.getElementById("test").addEventListener("click", apendItem)
})


function apendItem(event) {

  let image = document.querySelector(".fild")
  let title = document.querySelector(".input-title")
  let text = document.querySelector(".input-text")
  let t = text.value
  console.log("hey");
  let textSlice = `${t.slice(0, 30)}...`

  const item = {
    id: Date.now(),
    image: image,
    source: {
      name: "yossi"
    },
    title: title.value,
    description: textSlice,
    content: t
  }

  let data = JSON.parse(localStorage.getItem('data'))
  data.push(item)
  localStorage.setItem('data', JSON.stringify(data))

document.querySelector("input-title").reset();
// document.querySelector("input-text").reset();
  event.preventDefault();
}


// form.addEventListener("submit", apendItem)


