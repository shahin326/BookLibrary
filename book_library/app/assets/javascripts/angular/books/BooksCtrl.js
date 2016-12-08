var app = angular.module('BookLibrary');

app.controller('BooksCtrl', ['$scope', 'Book', function($scope, Book) {
  $scope.books = Book.query();


$scope.addBook = function() {
    if (!valid()) { return false; }

    Book.save($scope.book,
      function(response, _headers) {
        $scope.books.push(response);
      },
      function(response) {
        alert('Errors: ' + response.data.errors.join('. '));
      }
    );

    $scope.book = {};
};

$scope.filterBooks = function() {
  Book.search({query: $scope.search},
    function(response, _headers) {
      $scope.books = response;
    }
  );
};

  // checks if all inputs have been filled, if not it returns false.
    valid = function() {
      return !!$scope.book &&
        !!$scope.book.title && !!$scope.book.author &&
        !!$scope.book.description && !!$scope.book.reserved;
    }

}]);
