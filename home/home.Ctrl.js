angular.module('mainModule')
    .controller('homeCtrl', function (appService, $location) {
        var vm = this;
        vm.title = "HOLIDAYLIST";
        vm.holidays = [];
        vm.totalHoliday = 0;
        vm.pageSize = 5;
        vm.totalPage = 0;
        vm.pages = [];
        vm.currentpage =1;
        vm.pagechange = pagechange;
        vm.pagedpost = [];
        vm.currentholiday=null;
        vm.details=details;


        activate();

        function activate() {
            appService.getholiday().then(function (res) {
                vm.holidays = [];
                //vm.holidays = res.data
               console.log(res.data.holidays);

                for (var i in res.data.holidays) {
                    vm.holidays.push(res.data.holidays[i][0]); 
                }
                vm.totalHoliday = vm.holidays.length;
                console.log(vm.holidays);
                console.log(vm.pages);
                vm.totalPage = Math.ceil(vm.totalHoliday / vm.pageSize);
                for (var i = 1; i <= vm.totalPage; i++) {
                    vm.pages.push(i);
                }
                vm.pagechange(vm.pages[--vm.currentpage]);

      
                
            });
        }
     function pagechange(page){
         vm.pagedpost = [];
                vm.currentpage=page;
          console.log('page passed',page);
         console.log('vm.currentpage',vm.currentpage);
               var index=(page-1)*vm.pageSize;
                
                var trackindex=0;
         console.log('vm.totalHoliday',vm.totalHoliday)
                for(var i=index; i<=vm.totalHoliday; i++)
                    {   console.log('index',index);
                       
                        vm.pagedpost.push(vm.holidays[i]);
                     console.log(vm.holidays);
                     trackindex++
                     if(trackindex == vm.pageSize)
                         {break;}
                   
                    }}
    console.log(vm.pagedpost);
    
    function details(name,date,public)
    {
        $location.url('/holidaydetails/'+name+date+public);
    }

    });
