import 'script!jquery/dist/jquery';
import angular from 'angular';

import {expect} from 'chai';
import td from 'testdouble';

import {HomeController as homeController} from './home.controller.js';

describe('Home controller', () => {
  let $scope = null;
  let $window = null;

  beforeEach(window.inject(($rootScope, $compile, _$window_) => {
    $scope = td.object($rootScope.$new());
    $window = td.object(_$window_);
  }));

  describe('Home controller', () => {
    describe('should have', () => {
      it('a first section title', () => {
        homeController($scope, $window);
        $scope.greet();
        td.verify($window.alert('hello world'));
      });
    });
  });

  afterEach( () => {
    td.reset();
  });
});
