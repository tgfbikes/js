(function mainCtrlIIFE() {

  angular
    .module('calendarApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['currentDateService', 'dateDataService'];

  function MainCtrl(currentDateService, dateDataService) {
    var vm = this;

    vm.currentDay   = getCurrentDay();
    vm.currentMonth = getCurrentMonth();
    vm.currentYear  = getCurrentYear();

    function getCurrentDay() {
      return currentDateService.currentDay;
    }
    function getCurrentMonth() {
      return dateDataService.months[currentDateService.currentMonth].month;
    }
    function getCurrentYear() {
      return currentDateService.currentYear;
    }
  }

}());
