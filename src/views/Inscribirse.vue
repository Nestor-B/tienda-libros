<template>
    <div class="container bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <div class="wrapper-loggin bg-white border">
            <h3 class="display-4 text-center my-5 px-5">Registro</h3>
            <form action="#" class="px-4">
                <div class="group-form m-2">
                    <input type="email" autocomplete="" class="form-control" required v-model="access.email" placeholder="Email">
                </div>
                <div class="group-form m-2">
                    <input type="password" autocomplete="" class="form-control" required v-model="access.password" placeholder="Password">
                </div>
                <div class="group-form m-2 mt-4">
                    <button type="submit" @click.prevent="CrearUsuario" class="btn btn-primary d-block">Inscribirse</button>
                </div>
            </form>
            <div class="group-form d-flex justify-content-end border-top mt-4">
                <router-link to="/iniciar-sesion" class="p-3 px-4 text-decoration-none">Iniciar sesión</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Inscribirse from '../firebase/Inscribirse.vue'
    export default {
        mixins: [Inscribirse],
        data(){
            return {
                access: {
                    email: '',
                    password: ''
                }
            }
        },        
        computed: {
            validarForm(){
                return this.access.email && this.access.password
            }
        },  
    }
</script>