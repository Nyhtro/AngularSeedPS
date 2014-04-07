'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.snippet = '<span style="color:red">Hi there</span>';
        $scope.boolValue = false;
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Shibby',
                city: "Shabby",
                province: "Shobby"
            },
            imageUrl: 'img/AngularJs-large.png',
            sessions: [
                {
                    name: 'Super sessions',
                    creatorName: "Bobby",
                    duration: 1,
                    level: 'Super',
                    abstract: 'Learning about shibby stuff',
                    upVoteCount: 0
                },
                {
                    name: 'Shibby session',
                    creatorName: "Bobby",
                    duration: 2,
                    level: 'Super',
                    abstract: 'Learning about shibby stuff',
                    upVoteCount: 0
                },
                {
                    name: "Average",
                    creatorName: "Bobby",
                    duration: 4,
                    level: 'Super',
                    abstract: 'Learning about shibby stuff',
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        }
    }
);