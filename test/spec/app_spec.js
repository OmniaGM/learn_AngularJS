'use strict';

// load the controller's module
beforeEach(module('readingListApp'));
describe('Controller: ReadingListController', function () {
  var ReadingListController,
    scope, 
    http,
    controller,
    httpMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $http) {
    httpMock = $httpBackend;
    scope = $rootScope.$new();
    http = $http;
    controller = $controller;

    httpMock.expectGET('data/books.json').respond(
      [{
              "title": "book1",
              "author": "aithor1",
              "isbn": "1",
              "review": "review book1",
              "rating": 4,
              "genres": {
                "non-fiction": true,
                "fantasy": true
              },
              "$$hashKey": "005"
            }]
    )
    httpMock.expectGET('data/genres.json').respond(
      ['genre1', 'genre2', 'genre3']
      )


  }));

  it('should attach a list of books to the scope', function () {
    // debugger;

    ReadingListController = controller('ReadingListController', {
      $scope: scope,
      $http: http
    });
    httpMock.flush();
    expect(scope.books.length).toBe(1);
  });
});
