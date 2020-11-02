<template>
  <div id="B">
    <table class="egt">
      <caption>Listado de Alumnos</caption>
      <h1> Kinder B </h1>
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
name: "KinderB"
}
</script>

<style scoped>
#B {
  height: 100%;
}
th, td {
  padding: 15px;
  text-align: left;
}
</style>