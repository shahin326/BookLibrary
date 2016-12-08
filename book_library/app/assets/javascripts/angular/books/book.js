var app = angular.module('BookLibrary');

app.factory('Book', ['$resource', function($resource) {
  return $resource('/api/books/:id.json', { id: '@id' });
}]);
