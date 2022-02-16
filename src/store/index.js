import { createStore } from 'vuex'
import Swal from 'sweetalert2'

export default createStore({
    state: {
        acceso: {
            usuario: {},
            registrado: false,
            correoVerificado: false
        },
        carrito: {
            articulos: []
        },
        detallesPago: []
    },
    getters: {
        VerificarRegistro: (state) => {
            return state.acceso.registrado
        },
        ArticulosEnCarrito: (state) => {
          return state.carrito.articulos.length
        },
        Carrito: (state) => {
            return state.carrito.articulos
        },
        CuentaValidada: (state) => {
            return state.acceso.correoVerificado
        },
        detallesPago: (state) => {
            return state.detallesPago
        },
    },
    mutations: { 
        detallesPago(state, data) {
            state.detallesPago = data
        },
        PermitirAcceso(state) {
            state.acceso.registrado = true
        },
        correoVerificado(state) {
            state.acceso.correoVerificado = true
        },
        GuardarUsuario(state, datos) {
            state.acceso.usuario = datos
        },  
        EliminarArticuloDeCarrito(state, index){
            Swal.fire({
                title: '¿Quieres eliminar el artículo? ',
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: 'Yes',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Eliminado!', '', 'success')
                    state.carrito.articulos.splice(index,1)
                }
            })
        },      
        GuardarArticulosEnCarrito(state, libro){
            let targetLibro = {
                id: libro.idUTC,
                titulo: libro.titulo,
                autor: libro.autor,
                descripcion: libro.descripcion,
                genero: libro.genero,
                image: libro.imagen,
                anio: libro.anio,
                precio: libro.precio,
                cantidad: 1,
                total: libro.precio,
                existencia: libro.existencia,
                descuento: libro.descuento,
            }
            let existe = state.carrito.articulos.filter((e)=>{
                return (e.id === targetLibro.id)
            })
            
            if(existe.length > 0) {
                Swal.fire({
                    title: 'El artículo ya existe en el carrito!',
                    confirmButtonText: 'OK',
                })
            }else{
                if( state.carrito.articulos.push( targetLibro ) ){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                      
                    Toast.fire({
                        icon: 'success',
                        title: 'Listo!'
                    })
                }
            }
        }
    },
    actions: {},
    modules: {}
})