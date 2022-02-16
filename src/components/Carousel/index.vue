<template>
    <div class="container p-3 d-flex flex-column justify-content-center align-items-center bg-light rounded">
        <Carousel class="container mx-auto" :autoplay="timeplay" :itemsToShow="6" :wrapAround="true">
            <Slide v-for="slide,index of datos" :key="index">
                <div class="carousel__item">
                    <router-link :to="'/libro/'+slide.idUTC">
                        <img src="../../assets/reloadImagen.gif" 
                        @load="ImagenCargada(slide.imagen)" 
                        :alt="slide.titulo">
                    </router-link>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>        
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { Carousel, Navigation, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'
    import Libros from '../../firebase/Libros.vue'

    export default defineComponent({
        props: {
            datos: {
                type: String
            }, 
            timeplay: {
                default: function(){
                    return 3000
                }
            }
        },
        mixins: [Libros],
        components: {
            Carousel,
            Slide,
            Navigation
        },
        data(){
            return {
                libros: []
            }
        }
    })
</script>