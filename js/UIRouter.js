var myApp = angular.module("myApp", ['ui.router']);

	myApp.config(function ($stateProvider, $urlRouterProvider) {
	     
	     $urlRouterProvider.when("","/");
	     
	     $stateProvider
	        .state("top1", {
	            url: "/top1",
	            templateUrl: "top1.html"
	        })
	        .state("top2", {
	            url:"/top2",
	            templateUrl: "top2.html"
	        })
	        .state("top3", {
	            url:"/top3",
	            templateUrl: "top3.html"

	        });


	});