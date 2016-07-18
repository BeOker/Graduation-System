var myApp = angular.module("myApp", ['ui.router']);

	myApp.config(function ($stateProvider, $urlRouterProvider) {
	     
	     $urlRouterProvider.when("","/");
	     
	     $stateProvider
	        .state("modify_pwd", {
	            url: "/#modify_pwd",
	            templateUrl: "../Public_Page/modify_pwd3.html"
	        })
	        .state("modify_per_info", {
	            url:"/modify_per_info",
	            templateUrl: "../Public_Page/modify_per_info.html"
	        })
	        .state("stu_info", {
	            url:"/stu_info",
	            templateUrl: "stu_info.html"

	        });
	         .state("top3", {
	            url:"/top3",
	            templateUrl: "top3.html"


	        });


	});