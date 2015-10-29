(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersListController = require('./controllers/ListController');

var _controllersListController2 = _interopRequireDefault(_controllersListController);

angular.module('starter', ['ionic', 'firebase']).factory("Items", ["$firebaseArray", function ($firebaseArray) {
  var itemsRef = new Firebase("https://spieletruhe.firebaseio.com/items");
  return $firebaseArray(itemsRef);
}]).controller('ListCtrl', _controllersListController2['default']);

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

},{"./controllers/ListController":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _modelGame = require("../model/Game");

var _modelGame2 = _interopRequireDefault(_modelGame);

var ListController = (function () {
	function ListController($scope, $ionicListDelegate, Items) {
		_classCallCheck(this, ListController);

		this.items = Items;
		this.listDelegate = $ionicListDelegate;

		$scope.vm = this;
	}

	_createClass(ListController, [{
		key: "addItem",
		value: function addItem() {
			var name = prompt("What do want to store?");
			if (name) {
				var game = new _modelGame2["default"](name);
				//this.items.$add(JSON.stringify(game));
				this.items.$add({
					"name": name
				});
			}
		}
	}, {
		key: "purchaseItem",
		value: function purchaseItem(item) {
			var _this = this;

			var itemRef = new Firebase("https://spieletruhe.firebaseio.com/items/" + item.$id);
			itemRef.child("status").once('value', function (dataSnapshot) {
				if (dataSnapshot.val() !== null) {
					itemRef.child("status").set(null);
				} else {
					itemRef.child("status").set("purchased");
				}

				_this.listDelegate.closeOptionButtons();
			});
		}
	}, {
		key: "listItems",
		get: function get() {
			return this.items;
		}
	}]);

	return ListController;
})();

exports["default"] = ListController;
module.exports = exports["default"];

},{"../model/Game":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function Game(title) {
	_classCallCheck(this, Game);

	this.title = title;
};

exports["default"] = Game;
module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9wcm9qZWN0cy9TcGllbGV0cnVoZS9zcmMvYXBwLmpzIiwiRDovcHJvamVjdHMvU3BpZWxldHJ1aGUvc3JjL2NvbnRyb2xsZXJzL0xpc3RDb250cm9sbGVyLmpzIiwiRDovcHJvamVjdHMvU3BpZWxldHJ1aGUvc3JjL21vZGVsL0dhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7eUNDSzJCLDhCQUE4Qjs7OztBQUV6RCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUUvQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxjQUFjLEVBQUU7QUFDM0QsTUFBSSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsMENBQTBDLENBQUMsQ0FBQztBQUN4RSxTQUFPLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUNqQyxDQUFDLENBQUMsQ0FFSixVQUFVLENBQUMsVUFBVSx5Q0FBaUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJDZHRCLGVBQWU7Ozs7SUFFWCxjQUFjO0FBRXZCLFVBRlMsY0FBYyxDQUV0QixNQUFNLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFO3dCQUYzQixjQUFjOztBQUdqQyxNQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixNQUFJLENBQUMsWUFBWSxHQUFHLGtCQUFrQixDQUFDOztBQUV2QyxRQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztFQUNqQjs7Y0FQbUIsY0FBYzs7U0FhM0IsbUJBQUc7QUFDVCxPQUFJLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUM1QyxPQUFHLElBQUksRUFBRTtBQUNSLFFBQUksSUFBSSxHQUFHLDJCQUFTLElBQUksQ0FBQyxDQUFDOztBQUUxQixRQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUNmLFdBQU0sRUFBRyxJQUFJO0tBQ2IsQ0FBQyxDQUFDO0lBQ0g7R0FFRDs7O1NBRVcsc0JBQUMsSUFBSSxFQUFFOzs7QUFDbEIsT0FBSSxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsMkNBQTJDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25GLFVBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLFlBQVksRUFBSztBQUN2RCxRQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLEVBQUU7QUFDL0IsWUFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEMsTUFDSTtBQUNKLFlBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3pDOztBQUVELFVBQUssWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDdkMsQ0FBQyxDQUFDO0dBQ0g7OztPQTVCWSxlQUFHO0FBQ2YsVUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0dBQ2xCOzs7UUFYbUIsY0FBYzs7O3FCQUFkLGNBQWM7Ozs7Ozs7Ozs7OztJQ0ZkLElBQUksR0FFYixTQUZTLElBQUksQ0FFWixLQUFLLEVBQUU7dUJBRkMsSUFBSTs7QUFHdkIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Q0FDbkI7O3FCQUptQixJQUFJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIElvbmljIFN0YXJ0ZXIgQXBwXHJcblxyXG4vLyBhbmd1bGFyLm1vZHVsZSBpcyBhIGdsb2JhbCBwbGFjZSBmb3IgY3JlYXRpbmcsIHJlZ2lzdGVyaW5nIGFuZCByZXRyaWV2aW5nIEFuZ3VsYXIgbW9kdWxlc1xyXG4vLyAnc3RhcnRlcicgaXMgdGhlIG5hbWUgb2YgdGhpcyBhbmd1bGFyIG1vZHVsZSBleGFtcGxlIChhbHNvIHNldCBpbiBhIDxib2R5PiBhdHRyaWJ1dGUgaW4gaW5kZXguaHRtbClcclxuLy8gdGhlIDJuZCBwYXJhbWV0ZXIgaXMgYW4gYXJyYXkgb2YgJ3JlcXVpcmVzJ1xyXG5pbXBvcnQgTGlzdENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9MaXN0Q29udHJvbGxlcic7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc3RhcnRlcicsIFsnaW9uaWMnLCAnZmlyZWJhc2UnXSlcclxuXHJcbi5mYWN0b3J5KFwiSXRlbXNcIiwgW1wiJGZpcmViYXNlQXJyYXlcIiwgZnVuY3Rpb24gKCRmaXJlYmFzZUFycmF5KSB7XHJcbiAgICB2YXIgaXRlbXNSZWYgPSBuZXcgRmlyZWJhc2UoXCJodHRwczovL3NwaWVsZXRydWhlLmZpcmViYXNlaW8uY29tL2l0ZW1zXCIpO1xyXG4gICAgcmV0dXJuICRmaXJlYmFzZUFycmF5KGl0ZW1zUmVmKTtcclxuICB9XSlcclxuXHJcbi5jb250cm9sbGVyKCdMaXN0Q3RybCcsIExpc3RDb250cm9sbGVyKVxyXG5cclxuLyouY29udHJvbGxlcignTGlzdEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkaW9uaWNMaXN0RGVsZWdhdGUsIEl0ZW1zKSB7XHJcbiAgICAkc2NvcGUuaXRlbXMgPSBJdGVtcztcclxuXHJcbiAgICAkc2NvcGUuYWRkSXRlbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIG5hbWUgPSBwcm9tcHQoXCJXaGF0IGRvIHdhbnQgdG8gYnV5P1wiKTtcclxuICAgICAgaWYobmFtZSkge1xyXG4gICAgICAgICRzY29wZS5pdGVtcy4kYWRkKHtcclxuICAgICAgICAgIFwibmFtZVwiOiBuYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnB1cmNoYXNlSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHZhciBpdGVtUmVmID0gbmV3IEZpcmViYXNlKFwiaHR0cHM6Ly9zcGllbGV0cnVoZS5maXJlYmFzZWlvLmNvbS9pdGVtcy9cIiArIGl0ZW0uJGlkKTtcclxuICAgICAgaXRlbVJlZi5jaGlsZChcInN0YXR1c1wiKS5zZXQoXCJwdXJjaGFzZWRcIik7XHJcblxyXG4gICAgICAkaW9uaWNMaXN0RGVsZWdhdGUuY2xvc2VPcHRpb25CdXR0b25zKCk7XHJcbiAgICB9O1xyXG59KSovXHJcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuLi9tb2RlbC9HYW1lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCRzY29wZSwgJGlvbmljTGlzdERlbGVnYXRlLCBJdGVtcykge1xyXG5cdFx0dGhpcy5pdGVtcyA9IEl0ZW1zO1xyXG5cdFx0dGhpcy5saXN0RGVsZWdhdGUgPSAkaW9uaWNMaXN0RGVsZWdhdGU7XHJcblxyXG5cdFx0JHNjb3BlLnZtID0gdGhpcztcclxuXHR9XHJcblxyXG5cdGdldCBsaXN0SXRlbXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pdGVtcztcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oKSB7XHJcblx0XHRsZXQgbmFtZSA9IHByb21wdChcIldoYXQgZG8gd2FudCB0byBzdG9yZT9cIik7XHJcblx0XHRpZihuYW1lKSB7XHJcblx0XHRcdGxldCBnYW1lID0gbmV3IEdhbWUobmFtZSk7XHJcblx0XHRcdC8vdGhpcy5pdGVtcy4kYWRkKEpTT04uc3RyaW5naWZ5KGdhbWUpKTtcclxuXHRcdFx0dGhpcy5pdGVtcy4kYWRkKHtcclxuXHRcdFx0XHRcIm5hbWVcIiA6IG5hbWVcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcbiAgICBcdFxyXG5cdH1cclxuXHJcblx0cHVyY2hhc2VJdGVtKGl0ZW0pIHtcclxuXHRcdGxldCBpdGVtUmVmID0gbmV3IEZpcmViYXNlKFwiaHR0cHM6Ly9zcGllbGV0cnVoZS5maXJlYmFzZWlvLmNvbS9pdGVtcy9cIiArIGl0ZW0uJGlkKTtcclxuXHRcdGl0ZW1SZWYuY2hpbGQoXCJzdGF0dXNcIikub25jZSgndmFsdWUnLCAoZGF0YVNuYXBzaG90KSA9PiB7XHJcblx0XHRcdGlmKGRhdGFTbmFwc2hvdC52YWwoKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdGl0ZW1SZWYuY2hpbGQoXCJzdGF0dXNcIikuc2V0KG51bGwpO1xyXG5cdFx0XHR9IFxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpdGVtUmVmLmNoaWxkKFwic3RhdHVzXCIpLnNldChcInB1cmNoYXNlZFwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5saXN0RGVsZWdhdGUuY2xvc2VPcHRpb25CdXR0b25zKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuXHJcblx0Y29uc3RydWN0b3IodGl0bGUpIHtcclxuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcclxuXHR9XHJcbn0iXX0=
