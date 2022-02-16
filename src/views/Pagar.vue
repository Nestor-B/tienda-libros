<template>
    <div class="container">
        <Navbar /> 

        <div class="bg-light rounded container text-center p-4" v-for="libro, index of getLibroPorID" :key="index">
            <button class="btn my-2" onclick="history.back()">
                <i class="fas fa-arrow-left"></i>
            </button>
            <div class="imagen">
                <figure>
                    <img :src="libro.imagen" :alt="libro.titulo" style="max-width: 140px;min-height: 190px;">
                    <figcaption class="p-3">{{libro.titulo}}</figcaption>
                </figure>
            </div>
            <div style="max-width: 300px;margin: auto;">
                <h3 class="">Precio: <span class="text-success"> ${{ getPrecioArticulo(libro.precio) }} </span></h3>
                <div id="paypal-button-container"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/Menu/Navbar.vue'
    import Libros from '../firebase/Libros.vue'
    import Checkout_paypal from '../components/Paypal/index.vue'

    export default {
        mixins: [Libros, Checkout_paypal],
        components: {Navbar},
        data(){
            return {
                libros: [],
                pagar: ''
            }
        },
        methods: { 
            getPrecioArticulo(e){
                this.pagar = e.toFixed(2)
                return e.toFixed(2)
            }        
        } 
    }
</script>