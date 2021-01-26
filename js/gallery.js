// Activates the image gallery
// The main task is to set a event listener for each image and set it to behave 
// appropriately.

function activateGallery() {
  let thumbnails       = document.querySelectorAll("#gallery-thumbs div img");
  let mainImage        = document.querySelector("#gallery-photo img");
  let imageTitle       = document.querySelector("#gallery-info h3.title");
  let imageDescription = document.querySelector("#gallery-info p.description");

  
  thumbnails.forEach(thumbnail => {
    // Preload large images
    let largeImages = new Image();
    largeImages.setAttribute("src", thumbnail.dataset.largeVersion);
    
    thumbnail.addEventListener("click", function() {
      // Set clicked image as the main image
      mainImage.setAttribute("src", thumbnail.dataset.largeVersion);
      mainImage.setAttribute("alt", thumbnail.getAttribute("alt"));
      
      // Set clicked image as current.
      document.querySelector(".current").removeAttribute("class");
      thumbnail.parentElement.setAttribute("class", "current");

      // Set image title and description to match the clicked image
      imageTitle.innerHTML = thumbnail.dataset.title;
      imageDescription.innerHTML = thumbnail.dataset.description;
    });
  });
}