var app = angular.module('testPadding', ['ngDialog']);
app.config(['ngDialogProvider', function (ngDialogProvider) {ngDialogProvider.setDefaults({
className: 'ngdialog-theme-default',
});
}]);
app.controller('MainCtrl', function ($scope, $rootScope, ngDialog, $timeout) {
   $scope.openunix = function () {ngDialog.open({ template: 'unix', width: 980, height: 535 });};
});



// Function find hash and scroll with animation.
$(document).ready(function(){
$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
      window.location.hash = hash;
    });
  }
});
});
