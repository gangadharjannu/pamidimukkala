angular.module('Pamidimukkala', ["ui.router", "ngRoute"]);
angular.module('Pamidimukkala').config(config);

function config($stateProvider, $urlRouterProvider) {

	
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home', {
		url : '/home',
		templateUrl : 'app/views/home.html',
	}).state('about', {
		url : '/about',
		templateUrl : 'app/views/about.html',
	}).state('contact', {
		url : '/contact',
		templateUrl : 'app/views/contact.html',
	});
}
