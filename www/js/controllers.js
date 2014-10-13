angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $rootScope) {
	$('#map-canvas').show();
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
			// alert('ey')
			$("#map-canvas").css("min-width",screen.width);
			$("#map-canvas").css("min-height",screen.height -47);
		} else {
			// alert('yo')
			
			$("#map-canvas").css("min-width",document.documentElement.clientWidth);
			$("#map-canvas").css("min-height",document.documentElement.clientHeight -47);
		}
	}
	function initialize() {
		detectmob();
		var myLatlng = new google.maps.LatLng(52.383626,4.635956);
		var myLatlng2 = new google.maps.LatLng(52.384000,4.639248);

		var mapOptions = {
			zoom: 15,
			center: myLatlng
		}

		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			animation: google.maps.Animation.DROP,
			title: 'My Location' 
		});

		var marker2 = new google.maps.Marker({
			position: myLatlng2,
			map: map,
			animation: google.maps.Animation.DROP,
			title: 'My Location' 
		});

		var contentString = '<h1>Klant #1</h1>Lorizzle ipsizzle dolizzle sit amizzle, consectetuer adipiscing elit. Sure sapizzle velizzle, aliquet volutpizzle, dang pizzle, dope vizzle, arcu. Pellentesque izzle ma nizzle. I saw beyonces tizzles and my pizzle went crizzle eros. Dizzle izzle dolizzle dapibizzle hizzle tempizzle tempizzle. Maurizzle pellentesque shizzle my nizzle crocodizzle izzle turpizzle. Shiznit izzle tortizzle. Doggy things rhoncus pizzle. In hac habitasse doggy dictumst. Dang dapibizzle. I saw beyonces tizzles and my pizzle went crizzle bow wow wow shiznit, pretium eu, mattis go to hizzle, eleifend vitae, nunc. Dope suscipizzle. That\'s the shizzle crunk ghetto bling bling purus.';

		var infowindow = new google.maps.InfoWindow({
		  content: contentString
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

		google.maps.event.addListener(marker2, 'click', function() {
			infowindow.open(map,marker2);
		});
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
