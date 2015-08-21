// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic','ngCordova','uiGmapgoogle-maps']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

      //configuring for version 3 google map

  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('checkin', {
    url: '/checkin',
    templateUrl: 'templates/checkin.html',
    controller:'checkCtrl'
  });

  $stateProvider.state('help',{
    url:'/help',
    templateUrl: 'templates/help.html',
      controller:'helpCtrl'
  });

  $stateProvider.state('success',{
    url:'/success',
    templateUrl: 'templates/success.html',
    controller:'successCtrl'
  });

  $stateProvider.state('map',{
      url:'/map',
      templateUrl: 'templates/map.html',
      controller: 'mapCtrl'
  });

  if(localStorage.getItem("first") == undefined)
  {
    localStorage.setItem("first",'1');
    $urlRouterProvider.otherwise('/help');
  }
  else{
    $urlRouterProvider.otherwise('/checkin');
  }


  /*$stateProvider.state('app', {
   url: '/app',
   abstract: true,
   templateUrl: 'templates/menu.html'
   });*/

  /* $stateProvider.state('app.checkin', {
   url: '/checkin',
   views: {
   'menuContent': {
   templateUrl: 'templates/checkin.html',
   controller:'checkCtrl'
   }
   }
   });

   $stateProvider.state('app.help',{
   url:'/help',
   views: {
   'menuContent':{
   templateUrl: 'templates/help.html'
   }
   }
   });

   $stateProvider.state('app.success',{
   url:'/success',
   views:{
   'menuContent':{
   templateUrl:'templates/success.html'
   }
   }
   });

   */

});
