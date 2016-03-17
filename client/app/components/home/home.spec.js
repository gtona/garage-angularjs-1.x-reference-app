import 'script!jquery/dist/jquery';
import angular from 'angular';

import chai from 'chai';
let expect = chai.expect;

import {home} from './home';

describe('Home page', () => {
  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<home></home>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(home.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    let $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a first section title', () => {
      expect($(element).find('.home-title1').text()).to.equal(
          'Hello World');
    });

    describe('a layout', () => {
      it('to the top left', () => {
        expect($(element).attr('layout-align')).to.equal('center');
      });
    });

    describe('a first section which contains', () => {
      describe('a first bullet which contains', () => {
        it('good morning', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'good morning');
        });
      });

      describe('a second bullet which contains ', () => {
        it('good afternoon', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'good afternoon');
        });
      });

      describe('and a third bullet which contains', () => {
        it('good night', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'good night');
        });
      });
    });

  });
});
