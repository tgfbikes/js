(function calendarDirectiveIIFE() {

  angular
    .module('calendarApp')
    .directive('skCalendar', skCalendar);

  function skCalendar() {
    return {
      restrict: 'E',
      templateUrl: 'calendar.html',
      controllerAs: 'vm',
      scope: {
        months: '=',
        currentMonth: '=',
        currentDay: '='
      },
      controller: function skCalendarController() {
      }
    }
  }

}());
