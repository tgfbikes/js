'use strict';

(function pictureGalleryIIFE() {
  
  function configurePicURL() {
    let newPicList;
    for (let catIndex in piclist) {            // Iterate over category arrays
      let category = piclist[catIndex];        // Capture the category
      for (let imageIndex in category) {       // Iterate over the images within the category
        let imagePair = category[imageIndex];  // Capture the full and thumbnail images
        imagePair[0] = baseurl + imagePair[0]; // Append the baseurl to full image and the thumbnail image
        imagePair[1] = baseurl + imagePair[1];
        // now picList has the url concatinated with the image src
      }
    }
  }
  
  function getFullImgURL(thumbSrc) {
    let fullImgURL = thumbSrc.replace(/thumbs/, 'medium');                            // Replace thumbs in url string with medium
    let fullImg = $('<img></img>').attr('src', fullImgURL).addClass('materialboxed'); // Configure full img
    return fullImg;
  }
  
  function setThumbActive(img) {
    let thumbnails = $('#thumbnails div img');        // Get all thumbnails
    thumbnails.each(function findActiveThumb(index) { // For each image check to see if it has active-thumb class, if so remove it
      if ($(thumbnails[index]).hasClass('active-thumb')) {
        $(thumbnails[index]).removeClass('active-thumb');
      }
    });
    $(img).addClass('active-thumb'); // Add active-thumb class to the image that was reently clicked
  }
  
  function handleThumbClick(evt) {
    let $img = $(this.innerHTML);                  // Get img tag
    let fullImg = getFullImgURL($img.attr('src')); // Configure full image associated with thumbnail
    
    setThumbActive(evt.target);                    // Pass thumbnail img to set it to active
    
    $('.card-image img')                           // Get current full img
      .fadeOut('fast')                             // Fade img out
      .replaceWith( function() {                   // replace with new full img
        return $(fullImg)                
          .fadeIn('fast')                          // Fade new full img in fast
          .queue( function() {                     // Add css to queue
          $(fullImg).css('display', '').dequeue(); // Set img display to nothing to override default which is to make display inline
        });
      });
    $('.materialboxed').materialbox();             // Initialise materialize box for full img

  }
  
  function showFirstThumb(firstThumb) {
    let fullImg = getFullImgURL(firstThumb); // Configure full image url
    $('#thumbnails div img')                 // Get the first thumbnail and add class active-thumb
      .first()
      .addClass('active-thumb');
    $('.card-image').empty();                // Remove full image
    $('.card-image').append(fullImg);        // Append current full image
    $('.materialboxed').materialbox();       // When full image is clicked, Materialize will create modal
  }
  
  function updateThumbSection(thumbArray) {
    $('#thumbnails').empty();                          // Remove all thumbnails of last category
    thumbArray.forEach(function forEachThumb(elem) {   // Iterate over all current thumbnails
      let $img = $('<img></img>').attr('src', elem);   // Create img tag for thumnails and configure src
      let $div = $('<div></div>').append($img).click(handleThumbClick); // Append thumbnail to containing div and establish click handler
      $('#thumbnails').append($div);                   // Append div into thumbnails div
    });
    showFirstThumb(thumbArray[0]);                     // Take first thumbnail and show full image
  }
  
  function createThumbArray(indexOfCategory) {
    let thumbArray = [];                      // Initialize array
    let category = piclist[indexOfCategory];  // Get category
    for (let catIndex in category) {          // Iterate over the category
      thumbArray.push(category[catIndex][1]); // Get the thumbnails and push them to the array
    }
    updateThumbSection(thumbArray);           // Update the thumbnails section
  }
  
  function addNavClickHandlers() {
    for (let i = 3; i >= 0; i -= 1) { // Iterate over all category li's and add click handler to each
      $('#category' + i).click(function navClickHandler() {
        createThumbArray(i);
      });
    }
    
    // Slide show button main click handler
    $('#slide-show').click(function slideShowClickHandler() {
      let interval = setInterval(slideShow, 2000); // Start interval
      let index = 0;                               // Initialize index
      let $thumbArray = $('#thumbnails div img');  // Get all current thumbnails
      
      function slideShow() {
        $thumbArray
          .eq(index) // eq selects the element at the given index
          .trigger('click'); // trigger a psuedo click event

        // If the last thumbnail is passed, go the beginning
        if (++index >= $thumbArray.length) {
          index = 0;
        }
      }
      
      $('#slide-show')                              // Get button
        .removeClass('green accent-2')              // Remove green color  
        .addClass('red accent-2')                   // Add red color
        .unbind('click')                            // Remove current click handler
        .click(function stopSlideShowHandler() {    // Add click handler to stop interval and change button
          clearInterval(interval);
          $('#slide-show span')
            .html('Start Slide Show');
          $('#slide-show')
            .addClass('green accent-2')
            .click(slideShowClickHandler); // reapply the original click handler
      });
      $('#slide-show span')
        .html('Stop Slide Show');
    });
  }
  
  function initializePage() {
    createThumbArray(0);
  }
  
  $(document).ready(function main() {

    configurePicURL();     // Complete url to thumbnails and full images
    addNavClickHandlers(); // Add click handlers to anchor tags in navigation to update category
    initializePage();      // Initialize page with category 1 thumbnails
  }); // document ready
  
}()); // pictureGalleryIIFE