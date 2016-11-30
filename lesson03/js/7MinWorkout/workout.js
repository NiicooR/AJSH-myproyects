'use strict';

angular.module('7minWorkout')
.controller('WorkoutController', [ '$scope', '$interval',function ($scope, $interval){

//creamos una variable que es un array de ejercicios
var ejercicios = [];
//para agregar un componente a un array en js es con push


var ejercicios = [];
ejercicios.push({

  detalle: new Ejercicio({
    nombre: "jumpingJacks",
    titulo: "Jumping Jacks",
    descripcion: "A jumping jack or star jump, also called side-straddle hop is a physical jumping exercise.",
    imagen: "img/JumpingJacks.png",
    videos: ["//www.youtube.com/embed/dmYwZH_BNd0", "//www.youtube.com/embed/BABOdJ-2Z6o", "//www.youtube.com/embed/c4DAnQ6DtF8"],
    procedimiento: "Assume an erect position, with feet together and arms at your side.\
    Slightly bend your knees, and propel yourself a few inches into the air.\
    While in air, bring your legs out to the side about shoulder width or slightly wider.\
    As you are moving your legs outward, you should raise your arms up over your head; arms should be slightly bent throughout the entire in-air movement.\
    Your feet should land shoulder width or wider as your hands meet above your head with arms slightly bent"
  }),
  duracion: 30
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
  duracion: 45
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





var comenzarEjercicio = function (planEjercicios){
  $scope.ejercicioActual = planEjercicios;
  $scope.duracionEjercicioActual = 0;

$interval(function(){
    ++$scope.duracionEjercicioActual;
    console.log($scope.ejercicioActual.duracion)
  },1000, $scope.ejercicioActual.duracion)
  .then(function(){
    comenzarEjercicio( ejercicios.shift())
  });


}




comenzarEjercicio(ejercicios.shift());


}]);
//TODO
