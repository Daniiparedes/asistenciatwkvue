<template>
  <div id = "Ingresar">
   <div id = "Home">
       <body>
       <h1> KinderSchool </h1>
       <p> Seleccione una Opcion </p>
       </body>
       <router-link to="/Crearestudiante"><button type="submit">Ingresar Estudiante</button></router-link>
     <ul class="menu">
       <li><button>Ingresar a Curso</button>
         <ul>
           <li><router-link to="/KinderA"><a href="#">KinderA</a></router-link></li>
           <li><router-link to="/KinderB"><a href="#">KinderB</a></router-link></li>
         </ul>
       </li>
     </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "Home"
}
</script>

<style scoped>
button{
  width:620px;
}

#Ingresar {
  background-image: url("../assets/KinderTWK.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}


#Ingresar *{

  width : 100%;
  text-align: center;
}
h1 {
  color: #1abc9c;
  font-family: "Comic Sans MS";
}
p {
  color: #000000;
  font-family: "Comic Sans MS";
}

body {
  font-style: oblique;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: lavender;
  padding: 2em;

}
.menu{
  padding:0;
  list-style:none;
  width:620px;
  font-size:18px;
  background:#c1c1c1;
  border: 1px solid rgba(0,0,0,0.8);
  text-align: center;
}

.menu li a{
  display: block;
  border-bottom: 1px solid rgba(0,0,0, 0.2);
  border-top: 1px solid rgba(255,255,255, 0.2);
  background:#3e3f44;
  text-decoration:none;
  color:#FFF;
  text-shadow: 1px 0px 1px rgba(0,0,0,0.2);
  filter: dropshadow(color=#000, offx=1, offy=0);
  padding:10px;
  padding-left:20px;
}

.menu li ul li a{
  font-size:14px;
  color:#47689d;
  text-shadow: 1px 0px 1px rgba(255,255,255,0.5);

}

.menu li a:hover{
  background:#4a6ba2;
  -moz-transition: background 0.3s ease-in;
  -webkit-transition: background 0.3s ease-in;
  -o-transition: background 0.3s ease-in;
}

.menu ul{
  margin:0;
  padding:0;
  list-style:none;
  height:0;
  overflow: hidden;
  transition:1s;
  -moz-transition:1s;
  -webkit-transition:1s;
}

.menu li:hover ul{
  height:120px;
  overflow-y:auto;
  overflow-x:hidden;
}

.menu ul li a{
  background:#fafafa;
}

.menu ul li a:hover {
  background: none repeat scroll 0 0 #ccc;
  color: #fff;
  -moz-transition: color 0.4s ease;
  -webkit-transition: color 0.4s ease;
  -o-transition: color 0.4s ease;
}


</style>