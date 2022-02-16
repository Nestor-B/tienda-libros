<template>
    <div class="alert alert-white border-success animate__animated animate__flipInX" role="alert">
        <h4 class="alert-heading">
            <slot name="titulo"></slot>
        </h4>
        <p>
            <slot name="descripcion"></slot>
        </p>
        <hr>
        <p class="mb-0 text-success">
            Disfruta del contenido.
        </p>
    </div>
</template>