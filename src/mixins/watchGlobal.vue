<script>
    export default {
        watch:{
            '$route' (to){
                if( to.name !== 'IniciarSesion' ){
                    sessionStorage.setItem('ruta', to.fullPath)
                }
            },
            'ActivarSesionLocalDelCarrito'(){
                sessionStorage.clear()
                sessionStorage.setItem("cartLocal", JSON.stringify(this.$store.getters.Carrito))
            }
        },
        computed: {
            ActivarSesionLocalDelCarrito(){
                return this.$store.getters.ArticulosEnCarrito
            }
        },
        mounted() {
            if( JSON.parse(sessionStorage.getItem("cartLocal")) ){
                let items = JSON.parse(sessionStorage.getItem("cartLocal"))
                // console.log(items)
                items.forEach(element => {
                    this.$store.getters.Carrito.push(element)
                })        
            }
        }
    }
</script>