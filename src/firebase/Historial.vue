<script>
    import { getDatabase, set, ref, onValue } from 'firebase/database'

    export default {
        data(){
            return {
                historial: []
            }
        },
        computed: {
            getUserUID(){
                return this.$store.state.acceso.usuario.uid
            },
            getHistorialOrdenada(){
                let d = this.historial
                return d.sort( (a,b)=> b.UTC - a.UTC )
            },
            getHistorial(){
                return this.getHistorialOrdenada.map( (e,i)=>i<10&&e )
            }
        },
        methods: {
            GuardarHistorial(item){
                let targetItem = {
                    titulo: item.titulo,
                    idUTC: item.idUTC,
                    UTC: Date.now(),
                    fecha: Date().slice(0,21)
                }
                const db = getDatabase()
                const user = this.getUserUID
                set(ref(db, 'historial/'+user+'/'+item.idUTC), targetItem)                
            },
            CargarDB_historial(){
                const db = getDatabase()
                const starCountRef = ref(db, 'historial/'+this.getUserUID)
                onValue(starCountRef, (snapshot) => {
                    for( let i in snapshot.val() ) {
                        this.historial.push( snapshot.val()[i] )
                    }
                })
            },
        },
        mounted(){
            this.CargarDB_historial()
        }
    }
</script>