// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
import ListController from './controllers/ListController';

angular.module('starter', ['ionic', 'firebase'])

.factory("Items", ["$firebaseArray", function ($firebaseArray) {
    var itemsRef = new Firebase("https://spieletruhe.firebaseio.com/items");
    return $firebaseArray(itemsRef);
  }])

.controller('ListCtrl', ListController)

/*.controller('ListCtrl', function ($scope, $ionicListDelegate, Items) {
    $scope.items = Items;

    $scope.addItem = function () {
      var name = prompt("What do want to buy?");
      if(name) {
        $scope.items.$add({
          "name": name
        });
      }
    };

    $scope.purchaseItem = function (item) {
      var itemRef = new Firebase("https://spieletruhe.firebaseio.com/items/" + item.$id);
      itemRef.child("status").set("purchased");

      $ionicListDelegate.closeOptionButtons();
    };
})*/
