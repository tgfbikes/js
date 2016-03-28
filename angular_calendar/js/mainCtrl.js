(function mainCtrlIIFE() {

  angular
    .module('calendarApp')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    var vm = this;
    vm.isWorking = 'this is working';
  }

}());
