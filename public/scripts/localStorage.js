var myApp = angular.module( 'myApp', [] );

myApp.controller( 'LocalStorageController', function(){
  var vm = this;

  vm.getLocalStorage = function(){
    console.log( 'in LocalStorageController getLocalStorage' );
    var tempy = localStorage.getItem( 'userInputTest' );
    console.log( 'from localStorage:', tempy );
  }; //end setLocalStorage

  vm.setLocalStorage = function(){
    console.log( 'in LocalStorageController setLocalStorage:', vm.userInput );
    localStorage.setItem( 'userInputTest', vm.userInput );
    vm.userInput = '';
  }; //end setLocalStorage
});

myApp.controller( 'OtherController', function(){
  var vm=this;
  vm.checkLocalStorage = function(){
    var tempo = localStorage.getItem( 'userInputTest' );
    console.log( 'in OtherController checkLocalStorage:', tempo );
  }; // end checkLocalStorage
}); //end OtherController
