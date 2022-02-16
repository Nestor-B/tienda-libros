<script>
    import { getAuth, onAuthStateChanged } from "firebase/auth";    
    
    export default {
        methods: {
            Redireccionar(){
                sessionStorage.getItem('ruta')?
                    this.$router.push(sessionStorage.getItem('ruta')):
                    this.$router.push('/')
            }
        },
        mounted(){
            const auth = getAuth()
            
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // sendEmailVerification(auth.currentUser)
                    this.$store.state.acceso.usuario = {
                        uid: user.uid,
                        email: user.email
                    }
                    
                    this.$store.commit('PermitirAcceso')
                    if( user.emailVerified ){
                        this.$store.commit('correoVerificado')
                    }
                    this.Redireccionar()
                } else {
                    this.Redireccionar('/')
                }
            });            
        }        
    }
</script>