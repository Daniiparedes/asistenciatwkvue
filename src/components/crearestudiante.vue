<template>
<div id = "Ingresar">
  <div id = "Formulario">
    <form  target="_blank">
    <h1><b> Ingrese Datos del Estudiante </b></h1>
    <h2> <b> Complete Formulario </b> </h2>
      <div id="imgEstudiante">
        <img src="../assets/tomi.jpeg"> <br>
        <input type="file">
      </div>
    <p> Nombre del Estudiante: <input type="text" name="nombrecompleto"></p>
    <p>Nombre del Apoderado: <input type="text" name="nombrecompleto"></p>
    <p>
      Curso:
      <select name="Curso">
        <option>KinderA</option>
        <option>no existe</option>

      </select>

    </p>
    <p>Fecha de Nacimiento: <input type="Date" name="nombrecompleto"></p>
    <p>
      Sexo:
        <input type="radio" name="hm" value="h" required> Hombre
        <input type="radio" name="hm" value="m" required> Mujer
    </p>
    <p>Domicilio: <input type="text" name="nombrecompleto"></p>
    <p>Telefono: <input type="text" name="nombrecompleto"></p>
    <p>Celular: <input type="text" name="nombrecompleto"></p>
    <p>Email: <input type="text" name="nombrecompleto"></p>


    <p>
      Observaciones:<br>
      <textarea name="mensaje"></textarea>
    </p>
    <input class="btnGUARDAR" type="submit" value="Guardar">
    </form>
  </div>
</div>
</template>


<script>
export default {
name: "crearestudiante"
}
</script>

<style scoped>
#Ingresar {
  background-image: url("../assets/KinderTWK.jpg");
  background-repeat: no-repeat;
  border:3px solid #000;
  background-size: cover;

  width : 100%
}
p,h1 {
color: #000000;
  font-family: "Comic Sans MS";
}
 .btnGUARDAR {
   text-align: center;
   font-family: "Comic Sans MS";
   text-transform: uppercase;
   cursor: pointer;
   font-size: 10px;
   width: 50%;
   height: 50px;
   margin-left: 50%;
 }
.btnGUARDAR:hover{
  background: #fff;
  box-shadow: 0px 2px 10px 5px #2c3e50;
  color: #000;
  cursor: pointer;
}
#Formulario {
  width: 50%;
  text-align: left;
}
#imgEstudiante {
  width: 50%
}
#imgEstudiante img {
  width: 130px
}
</style>