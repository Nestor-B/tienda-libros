<script>
    import { getDatabase, set, ref, onValue } from 'firebase/database'
    import SweetAlert from '../mixins/Sweetalert/alertToast.vue'

    export default {
        mixins: [SweetAlert],
        data(){
            return {
                uid: '',
                TotalResultados: 14,
                LibroBuscado: ''
            }
        },
        computed: {
            getUserUID(){
                return this.$store.state.acceso.usuario.uid
            },
            getFavoritos(){
                return this.favoritos.filter( (e, i) => i < 20 && e )
            },
        },
        methods: {
            CargarDB_favoritos(){
                const db = getDatabase()
                const starCountRef = ref(db, 'favoritos/'+this.getUserUID)
                onValue(starCountRef, (snapshot) => {
                    for( let i in snapshot.val() ) {
                        this.favoritos.push( snapshot.val()[i] )
                    }
                })
                if( this.favoritos.slice(0)[0] ){
                    // console.log( this.favoritos.slice(0).length )
                }
            },
            GuardarFavorito(item){
                let targetItem = {
                    anio: item.anio,
                    titulo: item.titulo,
                    autor: item.autor,
                    descripcion: item.descripcion,
                    genero: item.genero,
                    idUTC: item.idUTC,
                    imagen: item.imagen,
                    precio: item.precio,
                    fecha: Date().slice(0,21)
                }
                const db = getDatabase()
                const user = this.getUserUID
                set(ref(db, 'favoritos/'+user+'/'+item.idUTC), targetItem)
                this.alertToast('Listo! Agregado a favoritos.', 'success')
            },
            EliminarFavorito(item){
                const db = getDatabase()
                const user = this.getUserUID
                set(ref(db, 'favoritos/'+user+'/'+item.idUTC), null).then(()=>{
                    this.favoritos = []
                    this.CargarDB_favoritos()
                })
                this.alertToast('Listo! Eliminado de favoritos.', 'success')
            },            
        }
    }
</script>