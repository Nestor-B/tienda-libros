<template>
    <div class="p-3 border rounded bg-light">
        <h2 class="mx-2">Historial</h2>
        <ul class="list-group">
            <li v-for="item, index of getHistorial" :key="index" class="list-group-item">
                <router-link :to="'/libro/'+item.idUTC" class="text-decoration-none d-flex justify-content-between align-items-center">
                    <span>{{item.titulo}}</span>
                    <small class="text-secondary">{{item.fecha}}</small>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import historial from '../../firebase/Historial.vue'
    export default {
        mixins: [historial]
    }
</script>