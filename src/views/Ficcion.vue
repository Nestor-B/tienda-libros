<template>
    <div class="container">
        <Navbar />

        <DescribirCategoria>
            <template v-slot:titulo>
                Ciencia ficción
            </template>
            <template v-slot:descripcion>
                Es un género especulativo que relata acontecimientos posibles desarrollados en un marco imaginario, cuya verosimilitud se fundamenta narrativamente en los campos de las ciencias físicas, naturales y sociales.
            </template>
        </DescribirCategoria>

        <Buscar @buscar='BuscarTexto(e)'  />

        <div class="grid-auto">
            <div v-for="libro, index of getLibrosFiccion" :key="index" 
                class="item bg-dark animate__animated animate__bounceIn"
                :style="{'animation-duration': (index+5)+'00ms !important'}">
                <router-link :to="'/libro/'+libro.idUTC">
                    <img :src="libro.imagen" :alt="libro.titulo">
                </router-link>
            </div>
        </div>        
        
        <PiePagina />
        
    </div>
</template>

<script>
    import Navbar from '../components/Menu/Navbar.vue'
    import DescribirCategoria from '../components/Anuncios/DescribirCategoria.vue'
    import Libros from '../firebase/Libros.vue'
    import Buscar from '../components/Libros/Buscar.vue'
    import PiePagina from '../components/Secciones/PiePagina.vue'

    export default {
        mixins: [Libros],
        components: {Navbar, DescribirCategoria, Buscar, PiePagina},
        data(){
            return {
                libros: [],
                LibroBuscado: ''
            }
        },
        methods: {
            BuscarTexto(){
                this.LibroBuscado = event.target.value
            }
        }
    }
</script>