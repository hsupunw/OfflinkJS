/**
 * Created by Chaya on 11/17/2015.
 */
//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/AddNewOrder', {
                templateUrl: '/AngularSandBox/app/test/routeExample/add_order.html'
                //controller: 'AddOrderController'
            }).
            when('/ShowOrders', {
                templateUrl: '/AngularSandBox/app/test/routeExample/show_orders.html'
               // controller: 'ShowOrdersController'
            }).
            otherwise({
                redirectTo: '/AngularSandBox/app/test/routeExample/AddNewOrder'
            });
    }]);


sampleApp.controller('AddOrderController', function($scope) {

    $scope.message = 'This is Add new order screen';

});


sampleApp.controller('ShowOrdersController', function($scope) {

    $scope.message = 'This is Show orders screen';

});