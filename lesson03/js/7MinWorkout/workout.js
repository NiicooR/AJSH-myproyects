//BUSCAR ERROR HERE
'use strict';

angular.module('7minWorkout')
.controller('WorkoutController', [ '$scope', '$interval',
  '$location',function ($scope, $interval,$location){

//creamos una variable que es un array de ejercicios
var ejercicios = [];
var nroEjercicio= 0;
//para agregar un componente a un array en js es con push


var ejercicios = [];
ejercicios.push({

  detalle: new Ejercicio({
    nombre: "jumpingJacks",
    titulo: "Jumping Jacks",
    descripcion: "A jumping jack or star jump, also called side-straddle hop is a physical jumping exercise.",
    imagen: "http://www.steadyrun.com/wp-content/uploads/2015/08/health-benefits-of-jumping-jacks.jpg",
    videos: ["//www.youtube.com/embed/dmYwZH_BNd0", "//www.youtube.com/embed/BABOdJ-2Z6o", "//www.youtube.com/embed/c4DAnQ6DtF8"],
    procedimiento: "Assume an erect position, with feet together and arms at your side.\
    Slightly bend your knees, and propel yourself a few inches into the air.\
    While in air, bring your legs out to the side about shoulder width or slightly wider.\
    As you are moving your legs outward, you should raise your arms up over your head; arms should be slightly bent throughout the entire in-air movement.\
    Your feet should land shoulder width or wider as your hands meet above your head with arms slightly bent"
  }),
  duracion: 3
});
ejercicios.push({
  detalle: new Ejercicio({
    nombre: "Sentadillas",
    titulo: "Sentadillas",
    descripcion: "senta",
    imagen: "https://img.difoosion.com/wp-content/blogs.dir/29/files/2015/05/Tecnica-de-sentadillas.jpg",
    videos: ["://www.youtube.com/watch?v=80dKqPruEMo", "//www.youtube.com/watch?v=0D_YyCNYK74", "//www.youtube.com/watch?v=G8mX-VJrUi8"],
    procedimiento: "bajar y subir, espalda recta, rodilla no debe pasar la punta de los pies.\
    preguntar al profe cualquier cosa.\
    si te rompes la rodilla llamar al medico.\
    no hacer con peso hasta despues de los 15 años de entrenamiento.\
    que mas queres que te diga."
  }),
  duracion: 5
});



function Ejercicio(args) {
    this.nombre = args.nombre;
    this.titulo = args.titulo;
    this.descripcion = args.descripcion;
    this.imagen = args.imagen;
    this.related = {};
    this.videos = args.videos;
    this.sonido = args.sonido;
    this.procedimiento = args.procedimiento;
  }

//ve el estado de la variable y si cambia se ejecuta un codigo
$scope.$watch('duracionEjercicioActual', function(arg1){
  if (arg1 == $scope.ejercicioActual.duracion ){
    comenzarEjercicio(ejercicios.shift());
    nroEjercicio++;     
  }
})



var comenzarEjercicio = function (planEjercicios) {

    if(ejercicios.length >= nroEjercicio){
      $scope.ejercicioActual = planEjercicios;
      $scope.duracionEjercicioActual = 0;
      $interval(function(){
        ++$scope.duracionEjercicioActual;

      },1000, $scope.ejercicioActual.duracion);
    }else{
        $location.path('/finish');
      }

    }
  comenzarEjercicio(ejercicios.shift());



 

}]);
//TODO
