<template>
    <nav class="navbar navbar-light">
        <div class="form-inline d-flex mb-3">
            <input class="form-control mr-sm-2 border" type="text" placeholder="Buscar Libro"  @keyup="text" />
            <!-- <button class="btn btn-outline-success my-2 mx-2 my-sm-0" type="submit">Buscar</button> -->
        </div>
    </nav>
</template>

<script>
    export default {
        methods: {
            text(e){
                this.$emit('buscar', e)
            }
        }
    }
</script>