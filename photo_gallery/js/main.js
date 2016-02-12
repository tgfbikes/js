'use strict';

(function pictureGalleryIIFE() {
  
  function configurePicURL() {
    let newPicList;
    for (let catIndex in piclist) {
      let category = piclist[catIndex];
      for (let imageIndex in category) {
        let imagePair = category[imageIndex];
        imagePair[0] = baseurl + imagePair[0];
        imagePair[1] = baseurl + imagePair[1];
      }
    }
  }
  
  function handleThumbClick() {
    let img = $(this.innerHTML);
    console.log(img.attr('src'));
  }
  
  function updateThumbSection(thumbArray) {
    $('#thumbnails').empty();
    thumbArray.forEach(function forEachThumb(elem) {
      let img = $('<img></img>').attr('src', elem);
      let div = $('<div></div>').append(img).click(handleThumbClick);
      $('#thumbnails').append(div);
    });
  }
  
  function createThumbArray(indexOfCategory) {
    let thumbArray = [];
    let category = piclist[indexOfCategory];
    for (let catIndex in category) {
      thumbArray.push(category[catIndex][1]);
    }
    updateThumbSection(thumbArray);
  }
  
  function addNavClickHandlers() {
    for (let i = 0; i < 4; i += 1) {
      $('#category' + i).click(function navClickHandler() {
        createThumbArray(i);
      });
    }
  }
  
  
  $(document).ready(function main() {
    // Complete url to thumbnails and full images
    configurePicURL();
    // Add click handlers to anchor tags in navigation to update category
    addNavClickHandlers();
  }); // document ready
  
}()); // pictureGalleryIIFE