'use strict';

(function pictureGalleryIIFE() {
  
  function configurePicURL() {
    let newPicList;
    // iterate over category arrays
    for (let catIndex in piclist) {
      // capture the category
      let category = piclist[catIndex];
      // iterate over the images within the category
      for (let imageIndex in category) {
        // capture the full and thumbnail images
        let imagePair = category[imageIndex];
        // append the baseurl to full image and the thumbnail image
        imagePair[0] = baseurl + imagePair[0];
        imagePair[1] = baseurl + imagePair[1];
        // now picList has the url concatinated with the image src
      }
    }
  }
  
  function getFullImgURL(thumbSrc) {
    let fullImgURL = thumbSrc.replace(/thumbs/, 'medium');
    let fullImg = $('<img></img>').attr('src', fullImgURL).addClass('materialboxed');
    return fullImg;
  }
  
  function handleThumbClick(evt) {
    // If there is a full image already, remove it and replace with new image
    $('.card-image').empty();
    // Get img tag
    let img = $(this.innerHTML);
    // Pass thumbnail src string to getFullImgURL to get the full img url and img tag
    let fullImg = getFullImgURL(img.attr('src'));
    // Append full image to div with .card-image class
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
    for (let i = 3; i >= 0; i -= 1) {
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