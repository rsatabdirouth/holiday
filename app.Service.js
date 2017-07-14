angular.module('mainModule')
.service('appService',function($http){
    var service = this;
    service.getholiday = getholiday;
    service.getpostByname=getpostByname;
    
    function getholiday(){
        return $http.get('https://holidayapi.com/v1/holidays?key=51457bd8-0d50-4121-aab3-2a8ae19cf65a&country=US&year=2016');
    }
    function getpostByname(name){
        return $http.get('https://holidayapi.com/v1/holidays?key=51457bd8-0d50-4121-aab3-2a8ae19cf65a&country=US&year=2016/'+name);
    }
});