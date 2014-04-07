/**
 * Created by TrondMartin on 04.04.2014.
 */
eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function(event){
            if(newEventForm.$valid){
                alert(event.name);
            }

        };

        $scope.cancelEvent = function()
        {
            window.location = "/AngularSeedPS/app/EventDetails.html";
        };
    }
);
