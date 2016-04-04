(function() {

  angular
    .module('calendarApp')
    .factory('dateService', dateService);

    dateService.$inject = []

    function dateService() {
      var service = {
        year: 2016,
        months: {
          January: {
            days: 31
          },
          February: {
            days: 28
          },
          March: {
            days: 31
          },
          April: {
            days: 30
          },
          May: {
            days: 31
          },
          June: {
            days: 30
          },
          July: {
            days: 31
          },
          August: {
            days: 31
          },
          September: {
            days: 30
          },
          October: {
            days: 31
          },
          November: {
            days: 30
          },
          December: {
            days: 31
          }
        }
      }
      return service;
    }

}());
