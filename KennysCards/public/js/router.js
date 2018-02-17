var app = angular.module("main", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
      templateUrl: "/home/home"
    })
    .when("/signin", {
      templateUrl: "/home/signin"
    })
    .when("/signup", {
      templateUrl: "/home/signup"
    })
    .otherwise({
      templateUrl: "/home/home"
    });

});