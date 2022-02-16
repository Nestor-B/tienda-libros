<template>
  <div id="app">
    <vue-glide>
      <vue-glide-slide v-for="i in 10" :key="i">
        Slide {{ i }}
      </vue-glide-slide>
    </vue-glide>
  </div>
</template>

<script>
  import { Glide, GlideSlide } from 'vue-glide-js'

  export default {
    components: {
      [Glide.name]: Glide,
      [GlideSlide.name]: GlideSlide
    }
  }
</script>
