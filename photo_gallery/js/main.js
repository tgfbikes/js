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
    newPicList = piclist;
    return newPicList;
  }
  
  function addNavClickHandlers() {
    for (let i = 1; i < 5; i += 1) {
      $('#category' + i).click(function navClickHandler() {
        console.log('click');
      });
    }
  }
  
  
  $(document).ready(function main() {
    // Complete url to thumbnails and full images
    let newPicList = configurePicURL();
    // Add click handlers to anchor tags in navigation to update category
    addNavClickHandlers();
  }); // document ready
  
}()); // pictureGalleryIIFE