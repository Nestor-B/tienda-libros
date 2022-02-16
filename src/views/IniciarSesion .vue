<template>
    <div class="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <div class="wrapper-loggin bg-white border">
            <h3 class="display-4 text-center my-5 px-5">Acceso</h3>
            <form action="#" class="px-4">
                <div class="group-form m-2">
                    <input type="email" autocomplete="" class="form-control" required v-model="access.email" placeholder="Email">
                </div>
                <div class="group-form m-2">
                    <input type="password" autocomplete="" class="form-control" required v-model="access.password" placeholder="Password">
                </div>
                <div class="group-form m-2 mt-4">
                    <button type="submit" :disabled="habilitarBoton" @click.prevent="verificarAcceso" class="btn btn-primary d-block">Iniciar sesión</button>
                </div>
            </form>
            <div class="group-form d-flex justify-content-end border-top mt-4">
                <router-link to="/inscribirse" class="p-3 px-4 text-decoration-none">Inscribirse</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import alertToast from '../mixins/Sweetalert/alertToast.vue'
    import Autenticacion from '../firebase/Autenticacion.vue'

    export default {
        mixins: [alertToast, Autenticacion],
        data(){
            return {
                access: {
                    email: '', /*'admin01@hotmail.com',*/
                    password: '' /*'123456789'*/
                },
                habilitarBoton: false,
            }
        },            
    }
</script>