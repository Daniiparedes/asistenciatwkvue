<template>
  <div id="A">
  <table class="egt">
    <caption>Listado de Alumnos</caption>
    <h1> Kinder A </h1>
    <tr>
      <th scope="col">Estudiante/Fecha </th>
      <th><input type="date"></th>
    </tr>
    <tr>
      <td>Daniel Paredes</td>
      <td><select >
        <option value="Presente">Presente</option>
        <option value="Ausente">Ausente</option>
        <option value="Atrasado">Atrasado</option>
      </select>
      </td>
    </tr>
    <tr>
      <td>Felipe Toro</td>
      <td><select >
        <option value="Presente">Presente</option>
        <option value="Ausente">Ausente</option>
        <option value="Atrasado">Atrasado</option>
      </select>
      </td>
    </tr>
    <tr>
      <td>Astu Astudillo</td>
      <td><select >
        <option value="Presente">Presente</option>
        <option value="Ausente">Ausente</option>
        <option value="Atrasado">Atrasado</option>
      </select>
      </td>
    </tr>
    <tr>
      <td>Gustavo </td>
      <td><select >
        <option value="Presente">Presente</option>
        <option value="Ausente">Ausente</option>
        <option value="Atrasado">Atrasado</option>
      </select>
      </td>
    </tr>
    <tr>
      <td>Profesor Cristoferrrrr</td>
      <td><select >
        <option value="Presente">Presente</option>
        <option value="Ausente">Ausente</option>
        <option value="Atrasado">Atrasado</option>
      </select>
      </td>
    </tr>

  </table>

    <button type="submit">Guardar</button>

    <button type="submit">Modificar</button>
  </div>
</template>

<script>
export default {
name: "KinderA"
}
</script>

<style scoped>
#A {
  text-align: Center;
  background-image: url("../assets/KinderTWK.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
table, th, td {
  border: 1px solid black;
  padding: 15px;
  text-align: left ;
}
button {
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

button span:after {
  content: '�';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

button:hover span {
  padding-right: 25px;
}

button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>