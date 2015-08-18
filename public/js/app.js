'use strict';

var app = angular.module('ReaderApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/books', {
    controller: 'BookshelfController', 
    templateUrl: 'public/views/bookshelf.html' 
  })
  .when('/books/:bookId', {
    controller: 'BookController', 
    templateUrl: 'public/views/book.html' 
  })
  .when('/books/:bookId/chapters/nul', { 
    redirectTo: '/books/:bookId' 
  })
  .when('/books/:bookId/chapters/:chapterId', {
    controller: 'ChapterController', 
    templateUrl: 'public/views/chapter.html' 
  })
  .otherwise({
    redirectTo: '/books' 
  });
});