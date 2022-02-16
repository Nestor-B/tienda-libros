<template>
    <div class="p-3 border rounded bg-light">
            <h2 class="mx-2">Mis Favoritos</h2>
            <ul class="list-group">
                <li class="list-group-item p-3" v-for="favorito, index of getFavoritos.reverse()" :key="index">
                    <div class="d-flex">
                        <div class="p-2 border">
                            <img :src="favorito.imagen" style="max-width: 100px;min-height: 140px;" :alt="favorito.titulo">
                        </div>
                        <router-link class="mx-3 text-dark text-decoration-none" :to="'/libro/'+favorito.idUTC"> 
                            <h4 class="text-primary">{{favorito.titulo}}</h4>
                            <h5 class="text-secondary">{{favorito.autor}}</h5>
                            <p>{{favorito.anio}}</p>
                            <h6>${{favorito.precio.toFixed(2)}}</h6>
                            <small class="text-secondary">{{favorito.fecha}}</small>
                        </router-link>
                    </div>
                    <div class="mt-1">
                        <button class="btn border-secondary" @click="EliminarFavorito(favorito)">
                            <i class="far fa-trash-alt"></i>
                            <span class="mx-3">Quitar</span> 
                        </button>
                        <button class="btn border-secondary mx-3" @click="agregarAlCarrito(favorito)">
                            <i class="fas fa-cart-plus"></i>
                            <span class="mx-3">Agregar al carrito</span> 
                        </button>
                        <router-link :to="'/pagar/'+favorito.idUTC" class="btn btn-warning border">
                            <i class="fas fa-shopping-cart"></i> 
                            <span class="mx-3">Comprar</span>
                        </router-link>
                    </div>
                </li>
            </ul>            
        </div>
</template>

<script>
    import Favoritos from '../../firebase/Favoritos.vue'
    export default {
        mixins: [Favoritos],
        data(){
            return {
                favoritos: []
            }
        },
        methods: {
            agregarAlCarrito(item){
                this.$store.commit('GuardarArticulosEnCarrito', item)
            },
        },
        mounted(){
            this.CargarDB_favoritos()
        }
    }
</script>