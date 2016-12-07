angular.module('app.controllers', [])
.controller('climaController', function($scope, $http) {

  $scope.clima = {
    ciudad: '',
    temperatura: '',
    image:''
  };

  $scope.getClima = function () {
    $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?appid=6e677030195aa712c6590e4eb6fbc78a&lang=es&units=metric&q=' + $scope.clima.ciudad 
    }).then(function successCallback(response) {
      $scope.clima.temperatura = response.data.main.temp + "°C";
      $scope.clima.image = "http://openweathermap.org/img/w/"+response.data.weather[0].icon+".png"

    }, function errorCallback(response) {
      alert("error");
    });
  };


});
