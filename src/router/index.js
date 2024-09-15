import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index';

const routes = [{
    path: '/',
    component: Index,
    meta: { title: 'Mudanzas Reto Bilbao (Vizcaya) Vitoria-Gasteiz (Álava) San Sebastián (Donostia) (Guipúzcoa) Barakaldo (Vizcaya) Getxo (Vizcaya) Irun (Guipúzcoa)', description: 'Mudanzas RETO País Vasco y transportes particulares y empresas, recogida de muebles, vaciado de pisos y garajes, servicio limpieza'}
  },{
    path: '/cuidades',
    component: () => import ('../views/Cuidades'),
    meta: { title: '✔️ Mudanzas Reto Bilbao y País Vasco ', description: 'Mudanzas Reto Santander, Mudanzas y transportes particulares y empresas, recogida de muebles'}
  },{
    path: '/:work/:city',
    component: () => import ('../views/WorkPage'),
  },{
    path: '/:workDetail',
    component: () => import ('../views/MenuWorkDetail'), 
  },{ 
    path: '/preguntas/:id',
    component: () => import ('../views/Preguntas'),  
  },{ 
    path: '/aviso-legal-y-politica-privacidad',
    component: () => import ('../views/Avisolegal'),
    meta: { title: 'AVISO LEGAL Y POLÍTICA PRIVACIDAD', description: 'Mudanzas y transportes particulares y empresas, recogida de muebles, vaciado de pisos y garajes, servicio limpieza'}
  },{ 
    path: '/politica-de-cookies',
    component: () => import ('../views/Politicas'),
    meta: { title: 'POLÍTICA DE COOKIES', description: 'Mudanzas y transportes particulares y empresas, recogida de muebles, vaciado de pisos y garajes, servicio limpieza'}
  },{ 
    path: '/404',
    component: () => import ('../views/404'),  
  },{
    path: '/:catchAll(.*)', redirect: '/404' 
  }];

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes});

router.beforeEach((to) => {
  if(to.meta.title) { 
     document.title = to.meta.title.toUpperCase()+ ' - MUDANZAS RETO';
     document.getElementsByTagName('meta').namedItem('description').setAttribute('content', to.meta.description)+ ' - MUDANZAS RETO, MUDANZAS RETO EUSKADI País Vasco';
  } 
  if (to.params.work && to.params.city){
     let pageTitle = to.params.work.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ')+ ' - MUDANZAS RETO, MUDANZAS RETO EUSKADI País Vasco';
     pageTitle += to.params.city.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ')+ ' - MUDANZAS RETO, MUDANZAS RETO EUSKADI País Vasco';
     document.title = pageTitle.toUpperCase();
     document.getElementsByTagName('meta').namedItem('description').setAttribute('content', pageTitle)
  }
});

export default router;
