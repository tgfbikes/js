(function() {

  angular
    .module('calendarApp')
    .factory('dateDataService', dateDataService);

    dateDataService.$inject = [];

    function dateDataService() {
      var service = {
        months: [
          {
            month: 'January',
            number: 0,
            days: 31
          },
          {
            month: 'February',
            number: 1,
            days: 28
          },
          {
            month: 'March',
            number: 2,
            days: 31
          },
          {
            month: 'April',
            number: 3,
            days: 30
          },
          {
            month: 'May',
            number: 4,
            days: 31
          },
          {
            month: 'June',
            number: 5,
            days: 30
          },
          {
            month: 'July',
            number: 6,
            days: 31
          },
          {
            month: 'August',
            number: 7,
            days: 31
          },
          {
            month: 'September',
            number: 8,
            days: 30
          },
          {
            month: 'October',
            number: 9,
            days: 31
          },
          {
            month: 'November',
            number: 10,
            days: 30
          },
          {
            month: 'December',
            number: 11,
            days: 31
          }
        ]
      }
      return service;
    }

}());
