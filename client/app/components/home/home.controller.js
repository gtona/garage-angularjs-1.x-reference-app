let HomeController = ($scope, $window) => {
  $scope.greet = () => {
    $window.alert('hello world');
  };
};

HomeController.$inject = ['$scope', '$window'];

export {HomeController};


