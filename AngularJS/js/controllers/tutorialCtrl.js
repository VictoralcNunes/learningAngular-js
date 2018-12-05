angular.module("tutorialCtrlModule",[])
.controller("TutorialCtrl", ['$scope', function($scope){
    
    $scope.tutorialObject = {};
    $scope.tutorialObject.title = "Main page";
    $scope.tutorialObject.subTitle = "Sub title";

    $scope.tutorialObject.bindOutput = 2;

    $scope.tutorialObject.firstName = "Thomas";
    $scope.tutorialObject.lastName = "Brown";
    

    $scope.timesTwo =function(){
        $scope.tutorialObject.bindOutput *=2;
    }
}])
.controller("TutorialCtrl2", ["$scope", function($scope){
    $scope.secondTutorial = "this is the second tutorial";
}]);