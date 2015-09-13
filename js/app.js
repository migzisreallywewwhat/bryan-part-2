(function() {
	'use strict';

	var Utils = {
		appRedirectTo: function (absoluteAppUrl) {
			window.location = window.location.href.split('#')[0] + '#' + absoluteAppUrl;
		},
		redirectTo: function (absoluteUrl) {
			window.location = window.location.origin + absoluteAppUrl;
		}
	};

	var app = angular.module('app', ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'user_home.html',
				controller: 'UserHomeController'
			})
			.when('/reset_password', {
				templateUrl: 'reset_password.html',
				controller: 'ResetPasswordController'
			})
			.when('/update_profile', {
				templateUrl: 'update_profile.html',
				controller: 'UpdateProfileController'
			})
			.when('/current_courses', {
				templateUrl: 'current_courses.html',
				controller: 'CurrentCoursesController'
			})
			.when('/past_courses', {
				templateUrl: 'past_courses.html',
				controller: 'PastCoursesController'
			})
			.when('/current_exams', {
				templateUrl: 'current_exams.html',
				controller: 'CurrentExamsController'
			})
			.when('/past_exams', {
				templateUrl: 'past_exams.html',
				controller: 'PastExamsController'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);

	app.controller('DefaultController', ['$scope', function($scope) {
		$scope.navigateTo = function (absoluteAppUrl) {
			Utils.appRedirectTo(absoluteAppUrl);
		};
	}]);

	app.controller('UserHomeController', ['$scope', function($scope) {

	}]);

	app.controller('ResetPasswordController', ['$scope', function($scope) {
		$scope.onResetPassword = function () {
			$('#modal-confirm').modal('show');
		};
		$scope.onConfirmResetPassword = function () {
			alert('changing password ...\nOld Password : ' + $scope.password + '\nNew Password : ' + $scope.newPassword1 + '\nConfirmation : ' + $scope.newPassword2);
			$('#modal-confirm').modal('hide');
		};
	}]);

	app.controller('UpdateProfileController', ['$scope', function($scope) {
		$scope.onUpdateProfile = function () {
			$('#modal-confirm').modal('show');
		};
		$scope.onConfirmUpdateProfile = function () {
			alert('updating profile ...\nFirst Name : ' + $scope.firstName + '\nMiddle Name : ' + $scope.middleName + '\nLast Name : ' + $scope.lastName + '\nEmail : ' + $scope.email);
			$('#modal-confirm').modal('hide');
		};
	}]);

	app.controller('CurrentCoursesController', ['$scope', function($scope) {
		$scope.currentCourses = [
			{
				name: 'C Programming',
				chapters: [
					{
						title: 'Variables and Constants',
						text: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
						presentations: [
							'Presentation #1',
							'Presentation #2'
						]
					},
					{
						title: 'Control Flows',
						text: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
						presentations: [
							'Presentation #1',
							'Presentation #2'
						]
					},
					{
						title: 'Structures and Custom data types',
						text: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
						presentations: [
							'Presentation #1',
							'Presentation #2'
						]
					}
				]
			},
			{
				name: 'Java 1',
				chapters: [
					{
						title: 'Variables and Constants',
						text: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
						presentations: [
							'Presentation #1',
							'Presentation #2'
						]
					},
					{
						title: 'Control Flows',
						text: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
						presentations: [
							'Presentation #1',
							'Presentation #2'
						]
					},
					{
						title: 'Structures and Custom data types',
						text: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
						presentations: [
							'Presentation #1',
							'Presentation #2'
						]
					}
				]
			}
		];

		$scope.showAccordion = function (id) {
			$('.collapse').collapse('hide');
			$(id).collapse('show');
			$scope.activeChapter = 0;
		};

		$scope.showChapter = function (id) {
			$scope.activeChapter = id;
		};

		$scope.activeChapter = 0;
	}]);

	app.controller('PastCoursesController', ['$scope', function($scope) {
		$scope.pastCourses = [
			{
				name: 'C Programming (Past)',
				chapters: [
					{
						title: 'Variables and Constants',
						text: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
						presentations: [
							'Presentation #1',
							'Presentation #2'
						]
					},
					{
						title: 'Control Flows',
						text: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
						presentations: [
							'Presentation #1',
							'Presentation #2'
						]
					},
					{
						title: 'Structures and Custom data types',
						text: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
						presentations: [
							'Presentation #1',
							'Presentation #2'
						]
					}
				]
			},
			{
				name: 'Java 1 (Past)',
				chapters: [
					{
						title: 'Variables and Constants',
						text: '1 Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
						presentations: [
							'Presentation #1',
							'Presentation #2'
						]
					},
					{
						title: 'Control Flows',
						text: '2 Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
						presentations: [
							'Presentation #1',
							'Presentation #2'
						]
					},
					{
						title: 'Structures and Custom data types',
						text: '3 Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
						presentations: [
							'Presentation #1',
							'Presentation #2'
						]
					}
				]
			}
		];

		$scope.showAccordion = function (id) {
			$('.collapse').collapse('hide');
			$(id).collapse('show');
			$scope.activeChapter = 0;
		};

		$scope.showChapter = function (id) {
			$scope.activeChapter = id;
		};

		$scope.activeChapter = 0;
	}]);

	app.controller('CurrentExamsController', ['$scope', function($scope) {
		$scope.selectedExam = -1;

		$scope.exams = [
			{id: 1, title: 'Web Information Systems', duration: 90, maxScore: 50},
			{id: 2, title: 'Cloud Dev', duration: 90, maxScore: 35},
			{id: 3, title: 'Japanese', duration: 60, maxScore: 20},
			{id: 4, title: 'Technical Writing', duration: 90, maxScore: 50},
			{id: 5, title: 'Chinese', duration: 30, maxScore: 100}
		];

		$scope.takeExam = function (examId) {
			$scope.selectedExam = examId;
			$('#modal-confirm').modal('show');
		};

		$scope.onConfirmTakeExam = function () {
			alert('Taking exam #' + $scope.selectedExam);
			$('#modal-confirm').modal('hide');
		};
	}]);

	app.controller('PastExamsController', ['$scope', function($scope) {
		$scope.selectedExam = -1;

		$scope.pastExams = [
			{
				id: 1,
				course: 'Management Information Systems',
				score: 40,
				max: 45,
				date: 1445410800000,
				tries: 1
			},
			{
				id: 2,
				course: 'Software Quality and Testing',
				score: 20,
				max: 25,
				date: 1434524400000,
				tries: 3
			},
			{
				id: 3,
				course: 'Multimedia Systems 2',
				score: 49,
				max: 50,
				date: 1445410800000,
				tries: 2
			},
			{
				id: 4,
				course: 'Intelligent Systems 1',
				score: 80,
				max: 100,
				date: 1445410800000,
				tries: 1
			}
		];

		$scope.takeExam = function (examId) {
			$scope.selectedExam = examId;
			$('#modal-confirm').modal('show');
		};

		$scope.onConfirmTakeExam = function () {
			alert('Taking exam ' + $scope.selectedExam);
			$('#modal-confirm').modal('hide');
		};
	}]);
})();