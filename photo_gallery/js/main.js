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
  
  function getFullImgURL(thumbSrc) {
    let fullImgURL = thumbSrc.replace(/thumbs/, 'medium');
    let fullImg = $('<img></img>').attr('src', fullImgURL);
    return fullImg;
  }
  
  function handleThumbClick() {
    $('#full-images #full-image').empty();
    let img = $(this.innerHTML);
    let fullImg = getFullImgURL(img.attr('src'));
    $('#full-images #full-image').append(fullImg);
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