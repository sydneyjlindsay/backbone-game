// Build out and design the skeleton pages of a game. 
// Incorporate some of the design principles that you read about in #1 and #2. 
// Your game should include the following screens:

// Loading screen that displays for four seconds before taking you to a menu screen.
// A menu screen with a play button, leaderboard button, and settings button.
// A game screen where your user would play the game.
// A leaderboard screen.
// A settings screen.

$(window).load(function() {
		$('main').hide();
		$('#loader').delay(4000).fadeOut('fast');
		$('main').delay(4500).fadeIn('fast');
	});

$(document).on('ready', function(){
	
	var bluePrint = Backbone.Router.extend({
		routes: {
			'': 				'showMainMenu',
			'main-menu': 		'showMainMenu',
			'play':				'showPlayScreen',
			'leaderboard': 		'showLeaders', 
			'settings': 		'showSettings', 
			'*notfound': 		'splat'
		},

		showMainMenu: function() {
			$('#main-menu').show();
			$('.screen').hide();
		}, 

		showPlayScreen: function() {
			$('.screen').hide();
			$('#main-menu').hide(); 
			$('#game-screen').show(); 
		}, 

		showLeaders: function() {
			$('.screen').hide();
			$('#main-menu').hide();
			$('#leaderboard').show();
		}, 

		showSettings: function() {
			$('.screen').hide();
			$('#main-menu').hide();
			$('#settings').show();
		},

		splat: function() {
			$('.screen').hide();
			$('#main-menu').hide();
			$('#error').show();
		}	
	});

var myGame = new bluePrint();
Backbone.history.start();

});