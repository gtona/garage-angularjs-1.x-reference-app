import angular from 'angular';
import {home} from './home/home';

export const components = angular.module('components', [
  home.name
]);
