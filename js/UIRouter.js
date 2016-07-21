var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when("", "/");

	$stateProvider
		.state("modify_pwd", {
			url: "/modify_pwd",
			templateUrl: "../Public_Page/modify_pwd3.html"
		})
		.state("modify_per_info", {
			url: "/modify_per_info",
			templateUrl: "../Public_Page/modify_per_info.html"
		})
		.state("stu_info", {
			url: "/stu_info",
			templateUrl: "look_stu_info.html"
		})
		.state("check_stu_req", {
			url: "/check_stu_req",
			templateUrl: "check_stu_req.html"
		})
		.state("check_stu_task", {
			url: "/check_stu_task",
			templateUrl: "check_stu_task.html"
		})
		.state("check_task", {
			url: "/check_task",
			templateUrl: "check_task.html"
		})
				.state("review_mid_check", {
			url: "/review_mid_check",
			templateUrl: "review_mid_check.html"
		})
		.state("check_opening_report", {
			url: "/check_opening_report",
			templateUrl: "check_opening_report.html"
		})
		.state("check_paper_draft", {
			url: "/check_paper_draft",
			templateUrl: "check_paper_draft.html"
		})
		.state("check_paper_final", {
			url: "/check_paper_final",
			templateUrl: "check_paper_final.html"
		})
		.state("good_paper_up", {
			url: "/good_paper_up",
			templateUrl: "good_paper_up.html"
		})
		.state("check_mid_paper", {
			url: "/check_mid_paper",
			templateUrl: "check_mid_paper.html"
		})
		.state("modify_date", {
			url: "/modify_date",
			templateUrl: "modify_date.html"
		})

});