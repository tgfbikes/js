(function mainCtrlIIFE() {

  angular
    .module('calendarApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['dateService'];

  function MainCtrl(dateService) {
    var vm = this;

    vm.currentDay   = getCurrentDay();
    vm.currentMonth = getCurrentMonth();
    vm.currentYear  = getCurrentYear();

    function getCurrentDay() {
      return dateService.currentDay;
    }
    function getCurrentMonth() {
      return dateService.currentMonth;
    }
    function getCurrentYear() {
      return dateService.currentYear;
    }
  }

}());
