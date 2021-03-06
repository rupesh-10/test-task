import {createRouter,createWebHashHistory} from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import Dashboard from "../components/Dashboard"
import Subject from "../components/Subject"

import Login from '../components/Login'

const router =  createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter:(to,from,next) =>{
        if (!(localStorage.getItem('userData'))) {
            return next({
                name:'Login'
            })
          }
        
          return next()
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter:(to,from,next) =>{
        if ((localStorage.getItem('userData'))) {
            return next({
                name:'Dashboard'
            })
          }
        
          return next()
      }
    },
    {
        path: '/subject',
        name: 'Subject',
        component: Subject,
        beforeEnter:(to,from,next) =>{
          if (!(localStorage.getItem('userData'))) {
              return next({
                  name:'Login'
              })
            }
          
            return next()
        }
      },
  ]
})


  export default router;