<template>
    <div class="wrapper container d-flex justify-content-center p-3">
        <div v-if="!$store.getters.CuentaValidada">
            <div class="container alert alert-danger mt-5" style="max-width: 600px;" role="alert">
                <h4 class="alert-heading">Verificación de correo!</h4>
                <p>Su cuenta no ha sido activada. Verifique en su correo el link de validación para poder tener acceso a la plataforma.</p>
                <hr>
                <p class="mb-0">Contactenos en caso de problemas:  
                    <router-link to="/"> jsdev@corporation.com</router-link>
                </p>
            </div>
            <button class="btn border" @click="iniciarSesion">Ir a Login</button>
        </div>
    </div>
</template>

<script>
    import { getAuth, signOut } from 'firebase/auth'
    export default {
        methods: {
            iniciarSesion(){
                location = '/'
            }
        },
        mounted(){
            const auth = getAuth()
            signOut(auth)
        }   
    }
</script>