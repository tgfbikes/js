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
    let fullImg = $('<img></img>').attr('src', fullImgURL).addClass('materialboxed');
    return fullImg;
  }
  
  function handleThumbClick() {
    // If there is a full image already, remove it and replace with new image
    $('.card-image').empty();
    // Get img tag
    let img = $(this.innerHTML);
    // Pass thumbnail src string to getFullImgURL to get the full img url and img tag
    let fullImg = getFullImgURL(img.attr('src'));
    $('.card-image').append(fullImg);
    $('.materialboxed').materialbox();

  }
  
  function showFirstThumb(firstThumb) {
    let fullImg = getFullImgURL(firstThumb);
    $('.card-image').empty();
    $('.card-image').append(fullImg);
    $('.materialboxed').materialbox();
  }
  
  function updateThumbSection(thumbArray) {
    $('#thumbnails').empty();
    thumbArray.forEach(function forEachThumb(elem) {
      let img = $('<img></img>').attr('src', elem);
      let div = $('<div></div>').append(img).click(handleThumbClick);
      $('#thumbnails').append(div);
    });
    showFirstThumb(thumbArray[0]);
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
  
  function initializePage() {
    createThumbArray(0);
  }
  
  $(document).ready(function main() {

    // Complete url to thumbnails and full images
    configurePicURL();
    // Add click handlers to anchor tags in navigation to update category
    addNavClickHandlers();
    // Initialize page with category 1 thumbnails
    initializePage();
  }); // document ready
  
}()); // pictureGalleryIIFE