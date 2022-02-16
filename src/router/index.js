import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index'

let logged = false

const routes = [
    {
        path: '/verificar-correo', 
        name: 'verificarCorreo', 
        component: () => import('../views/verificarCorreo.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next()
            }else{
                next('iniciar-sesion')
            }
        }
    },
    {
        path: '/iniciar-sesion', 
        name: 'IniciarSesion', 
        component: () => import('../views/IniciarSesion .vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next('/')
            }else{
                next()
            }
        }
    }, 
    {
        path: '/inscribirse', 
        name: 'Inscribirse', 
        component: () => import('../views/Inscribirse.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next('/')
            }else{
                next()
            }
        }
    },       
    {
        path: '/', 
        name: 'Principal', 
        component: () => import('../views/Principal.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next()
            }else{
                next('iniciar-sesion')
            }
        }
    },
    {
        path: '/movimientos', 
        name: 'Movimientos', 
        component: () => import('../views/Movimientos.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next()
            }else{
                next('iniciar-sesion')
            }
        }
    },    
    {
        path: '/verificar-correo', 
        name: 'verificarCorreo', 
        component: () => import('../views/verificarCorreo.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next()
            }else{
                next('iniciar-sesion')
            }
        }
    }, 
    {
        path: '/infantil', 
        name: 'Infantil', 
        component: () => import('../views/Infantil.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next()
            }else{
                next('iniciar-sesion')
            }
        }
    },
    {
        path: '/novelas', 
        name: 'Novelas', 
        component: () => import('../views/Novelas.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next()
            }else{
                next('iniciar-sesion')
            }
        }
    },
    {
        path: '/ficcion', 
        name: 'Ficción', 
        component: () => import('../views/Ficcion.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next()
            }else{
                next('iniciar-sesion')
            }
        }
    }, 
    {
        path: '/libro', 
        name: 'Libro', 
        component: () => import('../views/Libro.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next()
            }else{
                next('iniciar-sesion')
            }
        }
    },
    {
        path: '/libro/:id', 
        name: 'LibroPorID', 
        component: () => import('../views/LibroPorID.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next()
            }else{
                next('iniciar-sesion')
            }
        }
    },
    {
        path: '/pagar/:id', 
        name: 'Pagar', 
        component: () => import('../views/Pagar.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next()
            }else{
                next('iniciar-sesion')
            }
        }
    },
    {
        path: '/pago-realizado', 
        name: 'PagoRealizado', 
        component: () => import('../views/PagoRealizado.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next()
            }else{
                next('iniciar-sesion')
            }
        }
    },
    {
        path: '/carrito', 
        name: 'Carrito', 
        component: () => import('../views/Carrito.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next()
            }else{
                next('iniciar-sesion')
            }
        }
    },
    {
        path: '/notificaciones', 
        name: 'Notificaciones', 
        component: () => import('../views/Notificaciones.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next()
            }else{
                next('iniciar-sesion')
            }
        }
    }, 
    {
        path: '/configuracion', 
        name: 'Configuracion', 
        component: () => import('../views/Configuracion.vue'),
        beforeEnter: (to, from, next)=> { 
            if( logged ){
                next()
            }else{
                next('iniciar-sesion')
            }
        }
    },         
] 

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(function(){
    logged = store.getters.VerificarRegistro
})

export default router