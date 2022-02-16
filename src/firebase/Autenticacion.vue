<script>
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
    
    export default {
        methods: {
            verificarAcceso(){
                // this.habilitarBoton = true
                let email = this.access.email
                let password = this.access.password
                const auth = getAuth();
                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    this.$store.commit('PermitirAcceso')
                    this.$store.commit('GuardarUsuario', {
                        uid: user.uid,
                        email: user.email
                    })
                    this.alertToast('Sesión iniciada!','success', ()=>{
                        this.$router.push('/')
                    })
                }).catch( ()=>{
                    this.alertToast('Usuario no encontrado!','warning')
                } )                
            } 
        },
    }
</script>