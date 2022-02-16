<template>
    <div class="container">
        <Navbar /> 

        <Membresia />

        <div class="p-3 border rounded bg-light">
            <div class="grid-2" v-for="item, index of getLibroPorID" :key="index">
                <div class="imagen p-2">
                    <div class="wrapper-imagen position-relative">
                        <img :src="item.imagen" class="mt-2" style="max-height:330px;">
                        <div class="opciones-articulo text-white d-flex justify-content-evenly">
                            <i class="fas fa-heart" @click="GuardarSeguir(item)"></i>
                            <i class="fas fa-bookmark" @click="GuardarFavorito(item)"></i>
                        </div>
                    </div>
                </div>
                <div class="detalles">
                    <div class="wrapper px-4 bg-white m-3 border rounded">
                        <h1 class="py-4">{{item.titulo}}</h1>

                        <div class="text-right d-flex">
                            <p class="m"><b>Año:</b> {{item.anio}}</p>
                            <p class="mx-4"><b>Autor:</b> {{item.autor}}</p>
                            <p class="m"><b>Genero:</b> {{item.genero}}</p>
                        </div>

                        <div class="wrapper">
                            <h2>Sinopsis</h2>
                            <p class="lead descripcion">{{item.descripcion}}</p>
                            <p><br></p>
                        </div>
                    </div>
                    <div class="botton px-4 py-3 bg-white m-3 my-0 border rounded">
                        <div class="py-1 wrapper d-flex justify-content-between">
                            <h5 class="m-0">
                                Precio:
                                <span class="text-success">
                                    ${{ getPrecioArticulo( item.precio ) }}
                                </span>
                            </h5>                            
                            <div v-if="item.descuento != '0'" class="wrapper bg-danger p-1 px-3 text-white rounded">
                                <b>Descuento: {{item.descuento}}%</b>
                            </div>
                        </div>

                        <button class="btn border-secondary" @click="agregarAlCarrito(item)">
                            <i class="fas fa-cart-plus"></i>
                            <span class="mx-3">Agregar al carrito</span> 
                        </button>
                        <router-link :to="'/pagar/'+item.idUTC" class="btn btn-warning border mx-3">
                            <i class="fas fa-shopping-cart"></i> 
                            <span class="mx-3">Comprar</span>
                        </router-link>
                    </div>
                    
                    <div class="px-4 p-3 bg-white m-3 my-3 border rounded d-flex justify-content-end">
                        <i class="fas fa-heart" @click="GuardarSeguir(item)"></i>
                        <i class="fas mx-5 fa-bookmark" @click="GuardarFavorito(item)"></i>
                        <i class="fas fa-share-alt"></i>
                    </div>

                </div>
                
            </div>

            <div class="container my-4">
                <h4 class="text-center py-3">Otros</h4>
                <Carrusel :datos="getLibrosAleatorio" />
            </div>

        </div>
        <PiePagina />
    </div>
</template>

<script>
    import Navbar from '../components/Menu/Navbar.vue'
    import Libros from '../firebase/Libros.vue'
    import Membresia from '../components/Anuncios/Membresia.vue'
    import PiePagina from '../components/Secciones/PiePagina.vue'
    import GuardarFavorito from '../firebase/Favoritos.vue'
    import Seguir from '../firebase/Seguir.vue'
    import Carrusel from '../components/Carousel/index.vue'

    import historial from '../firebase/Historial.vue'

    export default {
        mixins: [Libros, GuardarFavorito, Seguir, historial],
        components: {Navbar, Membresia, PiePagina, Carrusel},
        data(){
            return {
                libros: [],
                precio: ''
            }
        },
        methods: {
            agregarAlCarrito(item){
                this.$store.commit('GuardarArticulosEnCarrito', item)
            },
            getPrecioArticulo(e){
                this.precio = e.toFixed(2)
                return e.toFixed(2)
            }        
        },
        mounted(){
            // Guardar historial
            this.GuardarHistorial( ... this.getLibroPorID )
        }
    }
</script>

<style scoped>
    .grid-2 {
        display: grid;
        grid-template-columns: 220px 1fr;
    }
    .detalles {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .descripcion {
         display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }
</style>