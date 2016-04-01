(function() {

  angular
    .module('calendarApp')
    .factory('dateService', dateService);

    function dateService() {
      var service = {
        January: {
          
        }
      }
      return service;
    }

}());
