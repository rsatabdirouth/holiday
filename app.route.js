angular.module('mainModule')
.config(function($routeProvider){
    $routeProvider
    .when('/home',{templateUrl:'./home/_home.html',controller:'homeCtrl as home'})
    .when('/holidaydetails/:name',{templateUrl:'./holidaydetails/_holidaydetails.html',controller:'holidaydetailCtrl as holiday'})
});