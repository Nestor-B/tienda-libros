<script>
    import { getDatabase, set, ref, onValue } from 'firebase/database'
    import SweetAlert from '../mixins/Sweetalert/alertToast.vue'

    export default {
        mixins: [SweetAlert],
        data(){
            return {
                uid: '',
                TotalResultados: 10,
                LibroBuscado: ''
            }
        },
        computed: {
            getUserUID(){
                return this.$store.state.acceso.usuario.uid
            },
            getSeguirLibros(){
                return this.seguir.filter( (e, i) => i < this.TotalResultados && e ) 
            },
        },
        methods: {
            CargarDB_seguir(){
                const db = getDatabase()
                const starCountRef = ref(db, 'seguir/'+this.getUserUID)
                onValue(starCountRef, (snapshot) => {
                    for( let i in snapshot.val() ) {
                        this.seguir.push( snapshot.val()[i] )
                    }
                })
            },
            GuardarSeguir(item){
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
                set(ref(db, 'seguir/'+user+'/'+item.idUTC), targetItem)
                this.alertToast('Listo! siguiendo.', 'success')
            },
            EliminarSeguir(item){
                const db = getDatabase()
                const user = this.getUserUID
                set(ref(db, 'seguir/'+user+'/'+item.idUTC), null).then(()=>{
                    this.seguir = []
                    this.CargarDB_seguir()
                })
                this.alertToast('Listo! Eliminado de seguir.', 'success')
            },            
        }
    }
</script>