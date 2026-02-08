function showPage(pageId) {
    console.log(pageId);
    document.getElementById("pages2").style.display = "none";

  const pages = document.querySelectorAll(".board");

  pages.forEach((page) => {
    page.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageId);
  selectedPage.classList.add("active");
}