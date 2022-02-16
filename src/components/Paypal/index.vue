<script>    
    import { loadScript } from "@paypal/paypal-js"

    export default {
        methods: {
            ConfigPayPal(){
                if( document.querySelector("#paypal-button-container") ){
                    var Vue = this
                    loadScript({ "client-id":"AXf3r2N4vwaJcbcqAFqG8yv-py-KFWkR0uZ--kC_UgKTXdC99l3O8uQSJzJtCv8Ao-QBhyYdl8s1Be-j" })
                    .then((paypal) => {
                        paypal.Buttons({
                            style: {
                                layout:  'vertical',
                                color:   'gold',
                                shape:   'rect',
                                label:   'pay'
                            },
                            createOrder: function(data, actions) {
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            value: Vue.pagar
                                        }
                                    }]
                                });
                            },
                            onCancel: function (data) {
                                alert("Cancelado" + data)
                            },
                            onApprove: function(data, actions) {
                                console.log(actions)
                                console.log(Vue.$store.getters.Carrito)
                                console.log(data)
                                Vue.$store.commit('detallesPago', data)
                                Vue.$router.push('/pago-realizado')
                                // alert('You have successfully created subscription ' + data.subscriptionID);
                            }                
                        })
                        .render("#paypal-button-container")
                        .catch((error) => {
                            console.error("failed to render the PayPal Buttons", error);
                        });
                    })
                    .catch((error) => {
                        console.error("failed to load the PayPal JS SDK script", error);
                    });                    
                }                
            }
        },
        mounted(){
            setTimeout(()=>{
                this.ConfigPayPal(this.precio)
            }, 500)
        }   
    }
</script>