<template>
    <div class="container">
        <Navbar />

        <AnuncioMembresia />

        <div class="d-flex justify-content-end">
            <Buscar @buscar='BuscarTexto(e)'  />
        </div>
        
        <div v-if="getBusquedaGeneral.length">
            <h4>Resultado de busqueda</h4>
            <div class="grid-auto p-3 bg-light">
                <div v-for="libro, index of getBusquedaGeneral" :key="index" 
                    class="item bg-dark animate__animated animate__bounceIn"
                    :style="{'animation-duration': (index+5)+'00ms !important'}">
                    <router-link :to="'/libro/'+libro.idUTC">
                        <img :src="libro.imagen" :alt="libro.titulo">
                    </router-link>  
                </div>
            </div>
        </div>
        
        <div class="wrapper">
            <h4 class="text-center py-2">Galería</h4>
            <Carrusel v-show="getLibrosAleatorio" :datos='getLibrosAleatorio' />
        </div>

        <!-- <div class="wrapper">
            <h4 class="text-center py-2">Siguiendo</h4>
            <Carrusel v-show="getSeguirLibros" :timeplay="1000000" :datos='getSeguirLibros' />          
        </div> -->

        <PiePagina />

    </div>
</template>

<script>
    import Carrusel from '../components/Carousel/index.vue'
    import AnuncioMembresia from '../components/Anuncios/Membresia.vue'
    import Navbar from '../components/Menu/Navbar.vue'
    import Libros from '../firebase/Libros.vue'
    import PiePagina from '../components/Secciones/PiePagina.vue'
    import Buscar from '../components/Libros/Buscar.vue'
    import Seguir from '../firebase/Seguir.vue'

    export default {
        name: 'Principal',
        mixins: [Libros, Seguir],
        components: {
            Buscar,
            AnuncioMembresia,
            Navbar,
            Carrusel,
            PiePagina
        },
        data(){
            return {
                libros: [],
                LibroBuscado: '',
                seguir: []
            }
        },
        methods: {
            BuscarTexto(){
                this.LibroBuscado = event.target.value
            }
        },
        mounted(){
            if( this.$store.getters.CuentaValidada == false ) {
                this.$router.push('/verificar-correo')
            }
            this.CargarDB_seguir()
        }
    };
</script>

<style scoped>

</style>