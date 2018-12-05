angular.module("tutorialCtrlModule",[])
.controller("TutorialCtrl", ['$scope', "Calculations", function($scope, Calculations){
    
    $scope.tutorialObject = {};
    $scope.tutorialObject.title = "Main page";
    $scope.tutorialObject.subTitle = "Sub title";

    $scope.tutorialObject.bindOutput = 2;

    $scope.tutorialObject.firstName = "Thomas";
    $scope.tutorialObject.lastName = "Brown";
    

    $scope.timesTwo =function(){
        $scope.tutorialObject.bindOutput = Calculations.timesTwo($scope.tutorialObject.bindOutput);
    }
    Calculations.pythagoreanTheorem();
}])
.directive("tbWelcomeMessage", function(){
    return{
        restrict: "AE", //E = element; A = attribute
        template: "<div>Howdy how are you</div>"
    }
})

.factory("Calculations", function(){
    var calculations = {};

    calculations.timesTwo = function(a){
        return a*2;
    }

    calculations.pythagoreanTheorem = function(a, b){
        return (a*a)+(b*b);
    }
    return calculations;
})