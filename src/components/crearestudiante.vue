<template>
<div id = "Ingresar">
  <form  target="_blank">
    <h1><b> Ingrese Datos del Estudiante </b></h1>
    <h2> <b> Complete Formulario </b> </h2>
    <p> Nombre del Estudiante: <input type="text" name="nombrecompleto"></p>
    <p>Nombre del Apoderado: <input type="text" name="nombrecompleto"></p>
    <p>
      Curso:
      <select name="Curso">
        <option>KinderA</option>
        <option>KinderB</option>

      </select>

    </p>
    <p>Curso: <input type="text" name="nombrecompleto"></p>
    <p>Fecha de Nacimiento: <input type="Date" name="nombrecompleto"></p>
    <p>
      Sexo:<br>
      <input type="checkbox" name="Masculino"> Masculino<br>
      <input type="checkbox" name="Femenino"> Femenino<br>
      <input type="checkbox" name="otres"> otres
    </p>
    <p>Domicilio: <input type="text" name="nombrecompleto"></p>
    <p>Telefono: <input type="text" name="nombrecompleto"></p>
    <p>Celular: <input type="text" name="nombrecompleto"></p>
    <p>Domicilio: <input type="text" name="nombrecompleto"></p>
    <p>Domicilio: <input type="text" name="nombrecompleto"></p>
    <p>Domicilio: <input type="text" name="nombrecompleto"></p>

    <p>
      Observaciones:<br>
      <textarea name="mensaje"></textarea>
    </p>
    <input class="btnGUARDAR" type="submit" value="Guardar">
  </form>
</div>
  <div id="imgEstudiante">
    <input type="file">
  </div>
</template>

<script>
export default {
name: "crearestudiante"
}
</script>

<style scoped>
#Ingresar {
  border:3px solid #000;
  text-align: left;
}
p,h1 {
  font-family: "Comic Sans MS";
}
 .btnGUARDAR{
   sumbit-align: center;
   font-family: "Comic Sans MS";
 }

</style>