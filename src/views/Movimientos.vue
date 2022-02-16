<template>    
    <div class="container">
        <Navbar />

        <div class="container mx-2">
            <ul class="nav nav-tabs my-3">
                <li class="nav-item">
                    <a :class="{'active':tag == 'favoritos' }" @click="setComponent('favoritos')" class="nav-link btn">
                        <i class="far fa-bookmark"></i>
                        Favoritos
                    </a>
                </li>
                <li class="nav-item">
                    <a :class="{'active':tag == 'seguir' }" @click="setComponent('seguir')" class="nav-link btn">
                        <i class="far fa-heart"></i>
                        Likes
                    </a>
                </li>
                <li class="nav-item">
                    <a :class="{'active':tag == 'historial' }" @click="setComponent('historial')" class="nav-link btn">
                        <i class="fas fa-history"></i> 
                        Historial
                    </a>
                </li>
                <li class="nav-item">
                    <a :class="{'active':tag == 'pagos' }" @click="setComponent('pagos')" class="nav-link btn">
                        <i class="fas fa-shopping-bag"></i>
                        Pagos
                    </a>
                </li>
            </ul>
            <keep-alive>
                <component :is="tag"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/Menu/Navbar.vue'
    import favoritos from './tabs/favoritos.vue'
    import seguir from './tabs/seguir.vue'
    import historial from './tabs/historial.vue'

    export default {
        components: {Navbar, favoritos, seguir, historial},
        data(){
            return {
                tag: 'favoritos'
            }
        },
        methods: {
            setComponent(e) {
                this.tag = e
            }
        }
    }
</script>