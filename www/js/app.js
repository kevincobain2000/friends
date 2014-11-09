// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  openFB.init({appId: '612020265575331'});

    //   FB.init({
    //       appId      : '612020265575331',
    //       cookie     : true,  // enable cookies to allow the server to access 
    //                           // the session
    //       xfbml      : true,  // parse social plugins on this page
    //       version    : 'v2.2' // use version 2.1
    // });

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.user', {
      url: "/user",
      views: {
        'menuContent' :{
          templateUrl: "templates/user.html",
          controller: "UserCtrl"
        }
      }
    })
    .state('app.people', {
      url: "/people",
      views: {
        'menuContent' :{
          templateUrl: "templates/people.html",
          controller: "PeopleCtrl"
        }
      }
    })
    .state('app.person', {
      url: "/people/:personId",
      views: {
        'menuContent' :{
          templateUrl: "templates/person.html",
          controller: "PersonCtrl"
        }
      }
    })

    .state('app.cards', {
      url: "/cards",
      views: {
        'menuContent' :{
          templateUrl: "templates/cards.html",
          controller: "CardsCtrl"
        }
      }
    })

    .state('app.setting', {
      url: "/setting",
      views: {
        'menuContent' :{
          templateUrl: "templates/setting.html"
        }
      }
    })
    .state('app.settings-city', {
      url: "/settings/city",
      views: {
        'menuContent' :{
          templateUrl: "templates/settings/city.html",
          controller: "CityCtrl"
        }
      }
    })

    .state('app.messages', {
      url: "/messages",
      views: {
        'menuContent' :{
          templateUrl: "templates/messages.html",
          controller: 'MessagesCtrl'
        }
      }
    })
    .state('app.message', {
      url: "/messages/:messageId",
      views: {
        'menuContent' :{
          templateUrl: "templates/message.html",
          controller: 'MessageCtrl'
        }
      },
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/people');
});

