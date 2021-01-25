
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs div img");

  let mainImage = document.querySelector("#gallery-photo img");
  let imageTitle = document.querySelector("#gallery-info h3.title");
  let imageDescription = document.querySelector("#gallery-info p.description");


  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {

      // Set clicked image as the main image
      mainImage.setAttribute("src", thumbnail.dataset.largeVersion);
      imageTitle.innerHTML = thumbnail.dataset.title;
      imageDescription.innerHTML = thumbnail.dataset.description;

      // Set clicked image as current.
      document.querySelector(".current").removeAttribute("class");
      thumbnail.parentElement.setAttribute("class", "current");
    });
  });
}