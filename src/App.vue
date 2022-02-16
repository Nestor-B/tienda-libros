<template>
    <div class="app">
        <router-view/>
    </div>
</template>

<script>
    import VerificarAutenticacion from './firebase/VerificarAutenticacion.vue'
    import watchGlobal from './mixins/watchGlobal.vue'

    export default {
        mixins: [VerificarAutenticacion, watchGlobal]
    }
</script>