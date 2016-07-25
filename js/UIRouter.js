var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when("", "/homePage");

	$stateProvider
		.state("modify_pwd", {
			url: "/modify_pwd",
			templateUrl: "../Public_Page/modify_pwd.html"
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
		.state("review_stu_req", {
			url: "/review_stu_req",
			templateUrl: "review_stu_req.html"
		})
		.state("review_stu_task", {
			url: "/review_stu_task",
			templateUrl: "review_stu_task.html"
		})
		.state("review_mid_paper", {
			url: "/review_mid_paper",
			templateUrl: "review_mid_paper.html"
		})
		.state("review_opening_report", {
			url: "/review_opening_report",
			templateUrl: "review_opening_report.html"
		})
		.state("review_paper_draft", {
			url: "/review_paper_draft",
			templateUrl: "review_paper_draft.html"
		})
		.state("review_paper_final", {
			url: "/review_paper_final",
			templateUrl: "review_paper_final.html"
		})
		.state("check_but_group", {
			url: "/check_but_group",
			templateUrl: "check_but_group.html"
		})
		.state("teacher_stu_num", {
			url: "/teacher_stu_num",
			templateUrl: "teacher_stu_num.html"
		})
		.state("check_double_final", {
			url: "/check_double_final",
			templateUrl: "check_double_final.html"
		})
		.state("arr_read_teacher", {
			url: "/arr_read_teacher",
			templateUrl: "arr_read_teacher.html"
		})
		.state("arr_but_group", {
			url: "/arr_but_group",
			templateUrl: "arr_but_group.html"
		})
		.state("grad_stu_info", {
			url: "/grad_stu_info",
			templateUrl: "grad_stu_info.html"
		})
		.state("stu_topic_info", {
			url: "/stu_topic_info",
			templateUrl: "stu_topic_info.html"
		})
		.state("stu_task_info", {
			url: "/stu_task_info",
			templateUrl: "stu_task_info.html"
		})
		.state("opening_report_info", {
			url: "/opening_report_info",
			templateUrl: "opening_report_info.html"
		})
		.state("stu_score_pool", {
			url: "/stu_score_pool",
			templateUrl: "stu_score_pool.html"
		})
		.state("arr_but_secretary", {
			url: "/arr_but_secretary",
			templateUrl: "arr_but_secretary.html"
		})
		.state("homePage", {
	            url: "/homePage",
	            templateUrl: "../Public_Page/homePage.html"
	        })
	        .state("applyForTeacher", {
	            url: "/applyForTeacher",
	            templateUrl: "applyForTeacher.html"
	        })
	        .state("applyForProject", {
	            url:"/applyForProject",
	            templateUrl: "applyForProject.html"
	        })
	        .state("submit", {
	            url:"/submit",
	            templateUrl: "submit.html"

	        }) 
	        .state("checkDefendInfo", {
	            url:"/checkDefendInfo",
	            templateUrl: "checkDefendInfo.html"

	        })
	        .state("checkScore", {
	            url:"/checkScore",
	            templateUrl: "checkScore.html"

	        })
	        .state("scoreSummary", {
	            url:"/scoreSummary",
	            templateUrl: "scoreSummary.html"

	        })
	        .state("scoreGrade", {
	            url:"/scoreGrade",
	            templateUrl: "scoreGrade.html"

	        })
	        .state("recommendTeacher", {
	            url:"/recommendTeacher",
	            templateUrl: "recommendTeacher.html"

	        })
	        .state("recommendThesis", {
	            url:"/recommendThesis",
	            templateUrl: "recommendThesis.html"

	        })
	        .state("spotChecks", {
	            url:"/spotChecks",
	            templateUrl: "spotChecks.html"

	        })
	        .state("studentInfo", {
	            url:"/studentInfo",
	            templateUrl: "studentInfo.html"

	        })
	        .state("dutyBookInfo", {
	            url:"/dutyBookInfo",
	            templateUrl: "dutyBookInfo.html"

	        })
	        .state("openReportInfo", {
	            url:"/openReportInfo",
	            templateUrl: "openReportInfo.html"

	        })
	        .state("midCheckInfo", {
	            url:"/midCheckInfo",
	            templateUrl: "midCheckInfo.html"

	        })
	        .state("thesisInfo", {
	            url:"/thesisInfo",
	            templateUrl: "thesisInfo.html"

	        })
	        .state("defendGroupInfo", {
	            url:"/defendGroupInfo",
	            templateUrl: "defendGroupInfo.html"

	        })
	        .state("termSet", {
	            url:"/termSet",
	            templateUrl: "termSet.html"

	        })
	        .state("fileData", {
	            url:"/fileData",
	            templateUrl: "fileData.html"

	        })
	        .state("closingDate", {
	            url:"/closingDate",
	            templateUrl: "closingDate.html"

	        })
	        .state("weightSet", {
	            url:"/weightSet",
	            templateUrl: "weightSet.html"

	        })
	        .state("closeSystem", {
	            url:"/closeSystem",
	            templateUrl: "closeSystem.html"

	        })
	        .state("studentAccount", {
	            url:"/studentAccount",
	            templateUrl: "studentAccount.html"

	        })
	        .state("guideTeacherAccount", {
	            url:"/guideTeacherAccount",
	            templateUrl: "guideTeacherAccount.html"

	        })
	        .state("secretaryAccount", {
	            url:"/secretaryAccount",
	            templateUrl: "secretaryAccount.html"

	        })
	        .state("directorAccount", {
	            url:"/directorAccount",
	            templateUrl: "directorAccount.html"

	        })
});