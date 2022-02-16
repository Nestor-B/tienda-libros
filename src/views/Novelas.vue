<template>
    <div class="container">
        <Navbar />

        <DescribirCategoria>
            <template v-slot:titulo>
                Novela
            </template>
            <template v-slot:descripcion>
                Una novela consiste en una narración literaria más o menos extensa, usualmente de carácter ficcional, en la que se cuenta una serie de eventos prolongados en el tiempo, con el fin de entretener y brindar placer estético a sus lectores. Es, junto con la crónica y el cuento, uno de los subgéneros en que se divide el género de la narrativa, cuyo rasgo distintivo es la construcción ficcional de un narrador.
            </template>
        </DescribirCategoria>  

        <Buscar @buscar='BuscarTexto(e)'  />

        <div class="grid-auto">
            <div v-for="libro, index of getLibrosNovelas" :key="index" 
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