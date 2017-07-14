angular.module('mainModule')
.controller('holidaydetailCtrl',function(appService,$routeParams,$location){
    var vm =this;
    vm.title ="DETAILS";
    vm.post = {};
    vm.name='';
    vm.back=back;
   // vm.date='';
    //vm.public='';
   
    activate();
     function activate(){
         vm.name = $routeParams.name;
          // vm.date=$routeParams.date;
         //vm.public=$routeParams.public;
         console.log('holiday is',vm.name);
         //console.log('day is',vm.date);
         
         if(vm.name){ appService.getpostByname(vm.name).then(function(res){vm.post= res.data;console.log('the object is',vm.post)});}
        }
    function back(){
        $location.url('/home/');
    }
  
});