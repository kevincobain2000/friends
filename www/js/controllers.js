angular.module('starter.controllers', ['ionic', 'ionic.contrib.ui.cards'])

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})

.directive('elastic', [
    '$timeout',
    function($timeout) {
      return {
        restrict: 'A',
        link: function($scope, element) {
          var resize = function() {
            return element[0].style.height = "" + element[0].scrollHeight + "px";
          };
          element.on("blur keyup change", resize);
          $timeout(resize, 0);
        }
      };
    }
  ])


.controller('AppCtrl', function($scope, $state, ezfb) {
  // $state.go('app.login');

  ezfb.getLoginStatus(function (res) {
    $scope.loginStatus = res;

  });

})

.controller('LoginCtrl', function($scope) {
  $scope.fbLogin = function() {
    console.log("FB Login Button Clicked")
  }
})

.controller('UserCtrl', function($scope) {

    var mySwiper = new Swiper('#swiper-photos',{
      //Your options here:
      mode:'horizontal',
      loop: true,
    });
    var mySwiper = new Swiper('#swiper-interests',{
      mode:'horizontal',
      loop: true,
      slidesPerView: 5,
    });
    var mySwiper = new Swiper('#swiper-mutual-friends',{
      mode:'horizontal',
      loop: true,
      slidesPerView: 5,
    });
})
.controller('MessagesCtrl', function($scope, $timeout) {
  $scope.messages = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  $scope.data = {
    showDelete: false
  };
  $scope.onItemDelete = function(message) {
    $scope.messages.splice($scope.messages.indexOf(message), 1);
  };

  $scope.doRefresh = function() {
      $timeout( function() {
        $scope.messages = [
          { title: 'REFRESHED Reggae', id: 1 },
          { title: 'REFRESHED Chill', id: 2 },
          { title: 'REFRESHED Dubstep', id: 3 },
          { title: 'REFRESHED Indie', id: 4 },
          { title: 'REFRESHED Rap', id: 5 },
          { title: 'REFRESHED Cowbell', id: 6 }
        ];

        $scope.$broadcast('scroll.refreshComplete');

      }, 1000);
    };


})

.controller('MessageCtrl', function($scope, $stateParams) {
})

.controller('PeopleCtrl', function($scope, $timeout) {
  $scope.people = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 },
    { title: 'Cowbell', id: 6 },
    { title: 'Cowbell', id: 6 },
    { title: 'Cowbell', id: 6 },
    { title: 'Cowbell', id: 6 },
    { title: 'Cowbell', id: 6 }
  ];

   $scope.doRefresh = function() {

      console.log('Refreshing!');
      $timeout( function() {
        //simulate async response
        // $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);

        //Stop the ion-refresher from spinning
        $scope.people = [
          { title: 'REFRESHED Reggae', id: 1 },
          { title: 'REFRESHED Chill', id: 2 },
          { title: 'REFRESHED Dubstep', id: 3 },
          { title: 'REFRESHED Indie', id: 4 },
          { title: 'REFRESHED Rap', id: 5 },
          { title: 'REFRESHED Cowbell', id: 6 }
        ];
        $scope.$broadcast('scroll.refreshComplete');

      }, 1000);
    };

  $scope.loadMore = function() {
    // $http.get('/more-items').success(function(items) {
      $timeout( function() {
        //Stop the ion-refresher from spinning
        $scope.people.push(
                            { title: 'LOAD MORE', id: 100 },
                            { title: 'LOAD MORE', id: 100 },
                            { title: 'LOAD MORE', id: 100 },
                            { title: 'LOAD MORE', id: 100 }
                            )
        $scope.$broadcast('scroll.infiniteScrollComplete');

      }, 1000);
    // });
  };

  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });

})

.controller('PersonCtrl', function($scope, $stateParams) {

   var mySwiper = new Swiper('#swiper-photos',{
      //Your options here:
      mode:'horizontal',
      loop: true,
      // slidesPerView: 2,
    }); 
    var mySwiper = new Swiper('#swiper-interests',{
      //Your options here:
      mode:'horizontal',
      loop: true,
      slidesPerView: 5,
    }); 
    var mySwiper = new Swiper('#swiper-mutual-friends',{
      //Your options here:
      mode:'horizontal',
      loop: true,
      slidesPerView: 5,
    }); 
})

.controller('CityCtrl', function($scope, $stateParams) {
})


.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {
  var cardTypes = [
    { title: 'Swipe down to clear the card', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic.png' },
    { title: 'Where is this?', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic.png' },
    { title: 'What kind of grass is this?', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic2.png' },
    { title: 'What beach is this?', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic3.png' },
    { title: 'What kind of clouds are these?', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic4.png' }
  ];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

  $scope.cardSwiped = function(index) {
    $scope.addCard();
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
    console.log("dropped down");
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }
})

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
    card.swipe();
  };
})



