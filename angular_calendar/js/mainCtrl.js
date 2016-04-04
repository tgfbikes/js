(function mainCtrlIIFE() {

  angular
    .module('calendarApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = [];

  function MainCtrl() {
    var vm = this;
    vm.month = 'March';
  }

}());
