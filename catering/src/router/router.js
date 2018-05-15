import Demo from '../components/demo-vuex'
import Demo2 from '../components/demo-vuex2'
import Home from '../components/home'
const router = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: Demo2
    }
  ]
  export default router