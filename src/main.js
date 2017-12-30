// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/

// Import App Custom Styles
import AppStyles from './css/app.css'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app.vue'


// Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
  },
  // Register App Component
  components: {
    app: App
  }
});


/**
 * Created by xiaohe on 12/19/17.
 */
//import Vue from 'vue'
//import App from './App'
//import VueRouter from 'vue-router'

// Import F7
//import Framework7 from 'framework7'


//Vue.use(VueRouter)

// 2. Define route components
//import resources from './pages/resources.vue'
//const Home = { template: resources }
//const Foo = { template: '<div>foo</div>' }
//const Bar = { template: '<div>bar</div>' }

// 3. Create the router
//const router = new VueRouter({
//  mode: 'history',
//  base: __dirname,
//  routes: [
//    { path: '/worker', component: resources },
//    { path: '/foo', component: Foo },
//    { path: '/bar', component: Bar }
//  ]
//})


//new Vue({
//  //el: '#App',
//  router,
//  render: h => h(App)
//})

