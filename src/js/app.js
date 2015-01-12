'use strict';

var app = angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'ui.utils',
    'ui.load',
    'ui.jq',
    'ui.validate',
    'oc.lazyLoad',
    'pascalprecht.translate',
]);

app.constant('ngAuthSettings', {
    apiServiceBaseUri: 'http://localhost:8000/api/',
    clientId: 'ngAuthApp'
});