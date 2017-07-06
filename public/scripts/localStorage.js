var myApp = angular.module( 'myApp', [] );

myApp.controller( 'LocalStorageController', function(){
  var vm = this;

  vm.getLocalStorage = function(){
    console.log( 'in LocalStorageController getLocalStorage' );
  }; //end setLocalStorage

  vm.setLocalStorage = function(){
    console.log( 'in LocalStorageController setLocalStorage' );
  }; //end setLocalStorage
});
