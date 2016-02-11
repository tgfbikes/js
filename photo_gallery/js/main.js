'use strict';

(function pictureGalleryIIFE() {
  
  function configurePicURL() {
    let newPicList;
    for (let catIndex in piclist) {
      let categoryArray= piclist[catIndex];
      let fragment = ('#fragment-' + catIndex);
      for (let imageIndex in categoryArray) {
        let imagePair = categoryArray[imageIndex];
        let fullImage = baseurl + imagePair[0];
        let thumbImage = baseurl + imagePair[1];
        $(fragment).append('<image src="' + thumbImage +'" >');
      }
    }
  }
  
  function setTabs() {
    $('#tabs').tabs({
      active: 0
    });
  }
  
  function addPicsToTabs(newPicList) {
  }
  
  $(document).ready(function main() {
    configurePicURL();
    setTabs();
  }); // document ready
  
}()); // pictureGalleryIIFE