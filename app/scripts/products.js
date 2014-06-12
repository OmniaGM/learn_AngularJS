(function(){
  'use strict';

  angular.module('readingList', [])

  .directive('bookGenres', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/book-genres.html',
      scope: {
        genres: '='
      }
    }
  })

  .directive('bookCover', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/book-cover.html',
      replace: true
    }
  })

  .directive('reviewForm', ['$http', function($http){
      return {
        restrict: 'E',
        templateUrl: 'views/review-form.html',
        replace: true,
        controller: function($scope){
          this.book = {genres:{}};
          this.addReview = function(form){
            $scope.books.push(this.book);
            this.book = {genres:{}};
            form.$setPristine();
          }
        },
        controllerAs: 'reviewFormCtrl',
        scope: {
          books: '=',
          genres: '='
        }
      }
    }]);


})();
