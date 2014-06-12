(function(){
  'use strict';

  angular.module('readingListApp', ['readingList'])

  .controller('ReadingListController', ['$http','$scope', function($http, $scope){
      var store = this;
      store.books = [];
      $http.get('data/books.json').success(function(data){
        store.books = $scope.books = data;
      });
      $http.get('data/genres.json').success(function(data){
        store.genres = $scope.genres = data;
      });

      this.showForm = false;
    }])

  
})();
