(function mainCtrlIIFE() {

  angular
    .module('calendarApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['currentDateService', 'dateDataService'];

  function MainCtrl(currentDateService, dateDataService) {
    var vm = this;
    vm.months       = dateDataService.months;
    vm.nowDate      = currentDateService;
    vm.dayObj       = null;
    vm.day          = getDay();
    vm.month        = getMonth();
    vm.year         = getYear();
    vm.setMonth     = setMonth;
    vm.setDay       = setDay;
    vm.editDay      = editDay;

    function getDay() {
      return currentDateService.currentDay;
    }
    function getMonth() {
      return {
        monthName: dateDataService.months[currentDateService.currentMonth].month,
        monthNum: currentDateService.currentMonth
      }
    }
    function getYear() {
      return currentDateService.currentYear;
    }
    function setMonth(monthNum) {
      newMonth = dateDataService.months[monthNum];
      vm.month = {
        monthName: newMonth.month,
        monthNum: newMonth.number
      };
    }
    function setDay(day) {
      vm.day = day.day_num;
      vm.dayObj = day;
    }
    function editDay(day) {
      console.log(day);
    }
  }

}());
