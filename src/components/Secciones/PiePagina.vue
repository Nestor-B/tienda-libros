<template>
    <div class="text-center mt-3 py-5 bg-light">
        <small class="text-secondary">
            {{anio}} &COPY; YBook, Inc.
        </small>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                anio: ''
            }
        },
        mounted(){
            let d = new Date()
            this.anio = d.getFullYear()
        }
    }
</script>