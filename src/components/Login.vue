
<template>
<div id = "Login">
  <form  method="post">
    <div class="imgcontainer">
      <img src="../assets/school.jpg" alt="Avatar" class="avatar">
    </div>

    <div class="container">
      <form action="/Home">
      <label for="uname"><b>Usuario</b></label>
      <input type="text" placeholder="Ingrese Usuario" name="uname" required>

      <label for="psw"><b>Contraseña</b></label>
      <input type="password" placeholder="Ingrese Contraseña" name="psw" required>

      <button type="submit">Ingresar</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
      </form>
    </div>
         <div class="container" style="background-color:#f1f1f1">
             <span class="psw">No tiene una cuenta <a href="#">Desea Crear?</a></span>
         </div>
             <div class="container" style="background-color:#f1f1f1">
               <span class="psw">Olvido su Contraseña <a href="#">Desea Restablecer?</a></span>
             </div>
  </form>
</div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style scoped>
/* Bordered form */
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #9DCFEB;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}


/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  background-size: cover;
  width: 25%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }

}
</style>