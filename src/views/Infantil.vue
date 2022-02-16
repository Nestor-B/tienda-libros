<template>
    <div class="container">
        <Navbar />     

        <DescribirCategoria>
            <template v-slot:titulo>
                Literatura infantil
            </template>
            <template v-slot:descripcion>
                La literatura infantil es la expresión escrita de la creatividad con un toque artístico .También está compuesta principalmente por los cuentos ,los mismos son narraciones con personajes estereotipados como recurso de representación social que presentan aspectos de la vida real y por eso es tan importante.
            </template>
        </DescribirCategoria>   

        <Buscar @buscar='BuscarTexto(e)'  />

        <div class="grid-auto">
            <div v-for="libro, index of getLibrosInfantiles" :key="index" 
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