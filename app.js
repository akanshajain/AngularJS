var app = angular.module('MyApp',[]);
app.controller('MyCtrl',function($scope)
  {
      $scope.name="Akansha";
      $scope.courses=["Maths","Physics","Biology","Comp"];
      $scope.data=[{'fname':'amit','lname':'singh','salary':'345.98' },{'fname':'sumit','lname':'singhaniya','salary':'34455.98' },{'fname':'amita','lname':'jain','salary':'123345.98' }];
  })
