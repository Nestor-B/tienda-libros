<template>
    <div class="text-center my-5">
        <h2 class="display-4 text-success">Pago Realizado</h2>
        <h5 class="text-secondary my-4 lead">Detalles</h5>
        <p style="max-width: 500px;margin: auto;">
            <ul class="list-group">
                <li class="list-group-item" v-for="i,key,index of $store.getters.detallesPago" :key="index">
                    {{key}} : {{i}}
                </li>
            </ul>
        </p>
        <button class="btn border my-4 border-danger text-danger" @click="$router.push('/')">Ir a Página Principal</button>
    </div>
</template>

<script>
    export default {
        mounted(){
            if( /(pagar|carrito)/.test(history.state.back) ){
                console.log("Aceptado")
            }else{
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    * {
        word-wrap: break-word !important;
    }
</style>