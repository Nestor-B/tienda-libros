<template>
    <div class="p-3 border rounded bg-light">
        <h2 class="mx-2">Mis Likes </h2>
        <marquee class="p-0 m-0">
            <small>El vendedor recibirá notificacion de que te gusta su producto.</small>
        </marquee>
        <ul class="list-group">
            <li class="list-group-item p-3" v-for="seguir, index of seguir" :key="index">
                <div class="d-flex">
                    <div class="p-2 border">
                        <img :src="seguir.imagen" style="max-width: 100px;min-height: 140px;" :alt="seguir.titulo">
                    </div>
                    <router-link class="mx-3 text-dark text-decoration-none" :to="'/libro/'+seguir.idUTC"> 
                        <h4 class="text-primary">{{seguir.titulo}}</h4>
                        <h5 class="text-secondary">{{seguir.autor}}</h5>
                        <p>{{seguir.anio}}</p>
                        <h6>${{seguir.precio.toFixed(2)}}</h6>
                        <small class="text-secondary">{{seguir.fecha}}</small>
                    </router-link>
                </div>
                <div class="mt-1">
                    <!-- <button class="btn border-secondary" @click="Eliminarseguir(seguir)">
                            <i class="far fa-trash-alt"></i>
                            <span class="mx-3">Quitar</span> 
                    </button>
                    <button class="btn border-secondary mx-3" @click="agregarAlCarrito(seguir)">
                            <i class="fas fa-cart-plus"></i>
                            <span class="mx-3">Agregar al carrito</span> 
                    </button>
                    <router-link :to="'/pagar/'+seguir.idUTC" class="btn btn-warning border">
                        <i class="fas fa-shopping-cart"></i> 
                        <span class="mx-3">Comprar</span>
                    </router-link> -->
                </div>
            </li>
        </ul>            
    </div>
</template>

<script>
    import Seguir from '../../firebase/Seguir.vue'
    export default {
        mixins: [Seguir],
        data(){
            return {
                seguir: []
            }
        },
        methods: {
            agregarAlCarrito(item){
                this.$store.commit('GuardarArticulosEnCarrito', item)
            },
        },
        mounted(){
            this.CargarDB_seguir()
        }
    }
</script>