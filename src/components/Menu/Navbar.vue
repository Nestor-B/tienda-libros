<template>
    <div class="container-fluid mb-5">
        <div class="mb-5 p-3"></div>
        
        <nav class="container navbar fixed-top navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
                <a class="navbar-brand text-dark" href="#">
                    <b>yourBook</b>
                    <!-- <img src="../../assets/logo2.png" width="85" alt=""> -->
                </a>
                <button class="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <!-- <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <i class="fas fa-home"></i>
                            </a>
                        </li> -->
                        <li class="nav-item" v-for="lista, index of lista_menu" 
                        :key="index">
                            <router-link class="nav-link" 
                            :class="{'text-danger':this.$route.name == lista.nombre}"
                             :to="lista.ruta"> {{lista.nombre}} </router-link>
                        </li>                         
                    </ul>
                    <span class="navbar-text">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">                            
                            <li class="nav-item position-relative">
                                <span class="badge badge-light bg-danger"
                                    style="position:absolute;bottom: -8px;"
                                >
                                    {{$store.getters.ArticulosEnCarrito}}
                                </span>
                                <router-link to="/carrito" class="btn" aria-current="page">
                                    <i class="fas fa-shopping-cart"></i>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/notificaciones" class="btn" aria-current="page">
                                    <i class="fas fa-bell"></i>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/configuracion" class="btn" aria-current="page">
                                    <i class="fas fa-cog"></i>
                                </router-link>
                            </li>                                
                        </ul>
                    </span>
                </div>
            </div>
        </nav>            
    </div>    
</template>

<script>
    export default {
        data(){
            return {
                lista_menu: [
                    {nombre: 'Infantil', ruta: '/infantil'},
                    {nombre: 'Novelas', ruta: '/novelas'},
                    {nombre: 'Ficción', ruta: '/ficcion'},
                    {nombre: '/', ruta: ''},
                    {nombre: 'Movimientos', ruta: '/movimientos'},
                ]
            }
        }
    }
</script>