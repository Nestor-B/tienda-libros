<script>
    import { getDatabase, ref, onValue } from 'firebase/database'

    export default {
        data(){
            return {
                TotalResultados: 14
            }
        },
        methods: {
            CargarDB_libros(){
                const db = getDatabase()
                const starCountRef = ref(db, 'libros/')
                onValue(starCountRef, (snapshot) => {
                    for( let i in snapshot.val() ) {
                        if( this.libros ){
                            this.libros.push( snapshot.val()[i] )
                        }
                    }
                })
            },
            ImagenCargada(img){
                if( event.target.complete ) {
                    event.target.src = img
                }
            },
        },
        computed: {
            getLibrosOrdenados(){
                let d = this.getLibros
                return d.sort( (a,b)=> b.idUTC - a.idUTC )
            },
            getLibros(){
                if( this.LibroBuscado.length > 0 ){
                    return this.getLibrosOrdenados.filter( (e, i) => e.existencia > 0 && i <= this.TotalResultados && e.titulo.toLowerCase().includes(this.LibroBuscado) )
                }
                return this.libros               
            },
            getLibroPorID(){
                return this.getLibrosOrdenados.filter((e)=>{
                    return e.idUTC == this.$route.params.id && e.existencia > 0
                })
            },
            getBusquedaGeneral(){
                if( this.LibroBuscado.length > 0 ){
                    return this.getLibrosOrdenados.filter( (e, i) => e.existencia > 0 && i <= this.TotalResultados && e.titulo.toLowerCase().includes(this.LibroBuscado) )
                }
                return []                
            },
            getLibrosFiccion(){
                if( this.LibroBuscado.length > 0 ){
                    return this.getLibrosOrdenados.filter( (e, i) => e.existencia > 0 && i <= this.TotalResultados && e.genero == 'Ficcion' && e.titulo.toLowerCase().includes(this.LibroBuscado) )
                }
                return this.getLibrosOrdenados.filter( (e) => e.existencia > 0 && e.genero == 'Ficcion' )                 
            },
            getLibrosNovelas(){
                if( this.LibroBuscado.length > 0 ){
                    return this.getLibrosOrdenados.filter( (e, i) => e.existencia > 0 && i <= this.TotalResultados && e.genero == 'Novela' && e.titulo.toLowerCase().includes(this.LibroBuscado) )
                }
                return this.getLibrosOrdenados.filter( (e) => e.existencia > 0 && e.genero == 'Novela' )                
            },
            getLibrosInfantiles(){
                if( this.LibroBuscado.length > 0 ){
                    return this.getLibrosOrdenados.filter( (e, i) => e.existencia > 0 && i <= this.TotalResultados && e.genero == 'Infantil' && e.titulo.toLowerCase().includes(this.LibroBuscado) )
                }
                return this.getLibrosOrdenados.filter( (e) => e.existencia > 0 && e.genero == 'Infantil' )
            },
            getLibrosAleatorio(){
                let coleccion = []
                let index = 0
                this.getLibrosOrdenados.map((e) => {
                    if ( index <= 7 && e.existencia > 0 ) {
                        let index = Math.floor(Math.random() * (this.libros.length - 0)) + 0
                        coleccion.push( this.libros[ index ] )
                        index++
                    }
                })
                return [ ... new Set(coleccion) ]
            }
        },
        mounted(){
            this.CargarDB_libros()
        }        
    }
</script>