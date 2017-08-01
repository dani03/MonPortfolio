var myApp = angular.module('myApp', []);
// creation de notre controller

myApp.controller('firstCtrl', ['$scope', function($scope){
  $scope.skills = 'compétances';
  $scope.formated ='formation';
  $scope.call = 'contacts';
  $scope.build ='projets';
  $scope.expe = 'expériences';

}]);

myApp.controller('schoolCtrl',['$scope', function($scope){
          $scope.contenu ={};
          $scope.contenu.details ={
            "formated":"simplon",
            "format":"formation de Developpeur Web Junior",
            "hightschool":"Université paris 13",
            "describe":"licence informatique option programmation imperative",
            "lycee":"Lycée Jacquard",
            "class":"baccalauréat STI2D option SIN (Systeme Information et Numerique)",
          }
}]);

myApp.controller('dateCtrl', ['$scope', , function($scope){

        $scope.moisSimplon ="janvier à Aujourd'hui";
         $scope.university =" 2014 / 2016";
         $scope.lydano ="2014";



}]);
