import Vue from 'vue'
import App from './App.vue'
//npm install --save vue-router
import VueRouter from 'vue-router'; //Importamos librería para rutas
import Login from './components/Login.vue'; //importamos nuestros componentes a utilizar
import Home from './components/Home.vue';
import crearestudiante from "@/components/crearestudiante";
import KinderA from "@/components/KinderA";
import KinderB from "@/components/KinderB";



Vue.config.productionTip = false

Vue.use(VueRouter); //Decimos a vue que vamos a utilizar la libreria instalada

const routes = [  //Definimos los path y donde nos llevará cada uno
  { path: '/',component:Login},
  { path: '/Login/:id?', name: 'Login', component: Login },  //parámetro opcional (?), para que sea obligatorio se debe quitar el simbolo de pregunta
  { path: '/Home', component: Home },
  { path: '/crearestudiante', component: crearestudiante },
  { path: '/KindeA', component: KinderA },
  { path: '/KindeB', component: KinderB }
]

//Creamos el objeto vuerouter
const router = new VueRouter({
  routes, //le pasamos el array de rutas
  mode: 'history' //para que no recargue la pagina al cambiar la ruta
})

new Vue({
  router, //agremos el objeto router a la instancia de Vue para que sea global
  render: h => h(App),
}).$mount('#app')
