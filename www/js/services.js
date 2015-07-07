angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Romy', coords: new google.maps.LatLng(52.383626,4.635956)},
    { id: 1, name: 'Laurens', coords: new google.maps.LatLng(52.384000,4.639248)}
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
