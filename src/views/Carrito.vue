<template>    
    <div class="container">
        <Navbar />
        <h3 class="bg-light p-3">Carrito</h3>
        <div class="d-flex justify-content-end m-2" v-if="$store.getters.Carrito.length > 1">
            <a class="btn-link btn border" @click="borrarArticulosEnCarrito">Borrar todo</a>
        </div>
        <div class="table-responsive">
            <table class="table p-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Descuento</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item, index of $store.getters.Carrito" :key="index">
                        <td>{{index+1}}</td>
                        <td> <router-link class="text-decoration-none" :to="'/libro/'+item.id">{{item.id}}</router-link> </td>
                        <td>{{item.titulo}}</td>
                        <td> <b class="text-danger" v-if="item.descuento != 0"> {{ item.descuento }}% </b> </td>
                        <td>{{ ( item.precio  ).toFixed(2) }}</td>
                        <td> <input type="number" min="1" :max="item.existencia" v-model="item.cantidad" @change="item.cantidad = $event.target.value"> </td>
                        <td>{{ (item.total = (item.precio-(( (item.descuento) * item.precio)/100))*item.cantidad).toFixed(2) }}</td>
                        <td class="text-center"> 
                            <i class="fas fa-trash-alt" @click="eliminar(index)"></i> 
                        </td>
                    </tr>
                    <tr>
                        <td colspan="8" class="text-center font-weight-bold">
                            <h4 class="mt-2">
                                Sub-Total 
                                <span class="mx-2 text-success">
                                    ${{Subtotal}}
                                </span> 
                            </h4>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="cpaypal" style="max-width: 300px;margin: 3em auto 0;" 
            :observador="pagar = Subtotal"
            v-if="$store.getters.Carrito.length">
            <div id="paypal-button-container"></div>
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/Menu/Navbar.vue'
    import Checkout_paypal from '../components/Paypal/index.vue'

    export default {
        mixins: [Checkout_paypal],
        components: {Navbar},
        data() {
            return {
                pagar: ''
            }
        },
        methods: {
            borrarArticulosEnCarrito(){
                this.$store.state.carrito.articulos = []
            },
            eliminar(index){
                this.$store.commit('EliminarArticuloDeCarrito', index)
            }
        },
        computed: {
            Subtotal(){
                let result = 0
                this.$store.getters.Carrito.map( (e) => {
                    result += e.total
                } )
                return result.toFixed(2)
            },
        }
    }
</script>