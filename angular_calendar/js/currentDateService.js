(function() {

  angular
    .module('calendarApp')
    .factory('currentDateService', currentDateService);

    currentDateService.$inject = [];

    var currentDate = new Date();

    function currentDateService() {
      var service = {
        currentDay: currentDate.getDay(),
        currentMonth: currentDate.getMonth(),
        currentYear: currentDate.getFullYear(),
      }
      return service;
    }

}());
