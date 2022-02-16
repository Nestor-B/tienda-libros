<template>    
    <div class="container">
        <Navbar />

        <h2 class="p-3 mt-3">Configuración</h2>
        <div class="p-3 rounded border">
            {{$store.state.acceso.usuario.email}}     
        </div>  

        <div class="my-3 container">
            <button class="btn border d-flex align-items-center" @click="CerrarSesion">
                <i class="fas fa-sign-out-alt text-danger"></i>    
                <span class="mx-2">Salir</span> 
            </button>    
        </div>            
    </div>
</template>

<script>
    import Navbar from '../components/Menu/Navbar.vue'
    import CerrarSesion from '../firebase/CerrarSesion.vue'

    export default {
        mixins: [CerrarSesion],
        components: {Navbar},
        data(){
            return {
                favoritos: []
            }
        }
    }
</script>