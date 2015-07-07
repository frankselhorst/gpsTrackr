angular.module('starter.controllers', ['starter.services'])

.controller('DashCtrl', function($scope, $rootScope, Friends) {
	$('#map-canvas').show();
	var friends = Friends.all();

	google.maps.event.addDomListener(window, 'load', initialize());
	function detectmob() { 
		if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
		) {
			$("#map-canvas").css("min-width",screen.width);
			$("#map-canvas").css("min-height",screen.height -47);
		} else {
			$("#map-canvas").css("min-width",document.documentElement.clientWidth);
			$("#map-canvas").css("min-height",document.documentElement.clientHeight -47);
		}
	}
	function initialize() {
		detectmob();

		var cen = new google.maps.LatLng(52.383626,4.635956);

		var mapOptions = {
			zoom: 15,
			center: cen
		}

		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		for(var i = 0; i < friends.length; i++) {

			marker = new google.maps.Marker({
				position: friends[i].coords,
				map: map,
				animation: google.maps.Animation.DROP,
				title: 'My Location'
			});

			var infowindow = new google.maps.InfoWindow({
			  content: friends[i].name
			});

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
		}
		
	}
})

.controller('FriendsCtrl', function($scope, Friends) {
	$scope.friends = Friends.all();
	$('#map-canvas').hide();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
	$scope.friend = Friends.get($stateParams.friendId);
	$('#map-canvas').hide();
})

.controller('AccountCtrl', function($scope) {
	$('#map-canvas').hide();
});
