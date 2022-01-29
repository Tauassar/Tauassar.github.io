// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = [];
images = Array.prototype.concat.apply(images, document.getElementsByClassName("content-3-frame-container"));
images = Array.prototype.concat.apply(images, document.getElementsByClassName("content-3x3-frame-container"));
images = Array.prototype.concat.apply(images, document.getElementsByClassName("content-3x4-frame-container"));
images = Array.prototype.concat.apply(images, document.getElementsByClassName("content-4-frame-container"));
images = Array.prototype.concat.apply(images, document.getElementsByClassName("content-image-block"));

var modalImg = document.getElementById("img01");
Array.prototype.map.call(images, (elem)=>{
    elem.onclick = function(e){
        // img_url = window.getComputedStyle(test, false).backgroundImage.slice(5,-2);
        modal.style.display = "block";
        modalImg.src = window.getComputedStyle(e.target, false).backgroundImage.slice(5,-2);;
    }
})

// When the user clicks on modal, close the modal
modal.onclick = function() { 
    modal.style.display = "none";
}

modalImg.onclick = function(event) {
    event.stopPropagation();
}

