(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

require('./merlin.js');

},{"./merlin.js":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./app":1}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Merlin

- Level up
- Max level
- Initial/introduction animation
- Page transition
- Chatbot
*/

chatDialog = [{
	"intro": "Hello, my name is Merlin. If you ever need my help i'll be right here to help you."
}, {
	"introChat": "I am able to help you with a few actions:"
}, {
	"options": [{ "option1": "Getting in touch with Level30Wizards." }, { "option2": "Tell you more about myself" }, { "option3": "What there is to see" }]
}, {
	"reactions": [{ "reaction1": "You can get in touch with Level30Wizards by <a href=\"\mailto:merlin@level30wizards.com\"\>email</a>, <a href=\"\https://twitter.com/level30wizards/\"\>twitter</a> or <a href=\"\tel:0612345678\"\>mobile phone</a>." }, { "reaction2": "My name is Merlin. I am the Archmage at Level30Wizards.com which means that I supervise every user on this website. I get experience by supervising you and others through this website. When I get experience an astounding flow of Magic flows through me and can have unexpected results to my appearance." }, { "reaction3": "Home, Work, Contact" }]
}];

var Wizard = function () {
	function Wizard(level) {
		_classCallCheck(this, Wizard);

		this.level = level;
		this.maxLevel = 6;
		this.isMaxLevel = false;
	}

	_createClass(Wizard, [{
		key: "levelUp",
		value: function levelUp() {
			this.level++;
		}
	}, {
		key: "checkMaxLevel",
		value: function checkMaxLevel() {
			if (this.level >= this.maxLevel) {
				return !this.isMaxLevel;
			}
			return this.isMaxLevel;
		}
	}, {
		key: "checkSession",
		value: function checkSession() {
			// Did a user level up already another time?
		}
	}, {
		key: "initialAnimation",
		value: function initialAnimation() {
			this.minimizeWizard();
		}
	}, {
		key: "minimizeWizard",
		value: function minimizeWizard() {
			console.log('minimizing');
		}
	}, {
		key: "initializeChat",
		value: function initializeChat() {}
	}, {
		key: "pageTransition",
		value: function pageTransition() {
			// Do page transition
		}
	}, {
		key: "onNewPage",
		value: function onNewPage() {
			// Level up!
			this.levelUp();
		}
	}]);

	return Wizard;
}();

var merlin = new Wizard(1);
console.log('test');
console.log(merlin.checkMaxLevel());

},{}]},{},[2]);
