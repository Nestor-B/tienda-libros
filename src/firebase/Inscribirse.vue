<script>
    import { getAuth, sendEmailVerification, createUserWithEmailAndPassword } from 'firebase/auth'
    import Swal from 'sweetalert2'

    export default {
        methods: {
            CrearUsuario(){
                let email = this.access.email
                let password = this.access.password
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    sendEmailVerification(auth.currentUser)
                    userCredential.user;
                    Swal.fire({
                        title: 'Registro completado!',
                        confirmButtonText: 'OK',
                    }).then(()=>{
                        location = "#/iniciar-sesion"
                    })
                }).catch((error) => {
                    const errorMessage = error.message;
                    Swal.fire({
                        title: "ERROR de Authentication" +errorMessage,
                        confirmButtonText: 'OK',
                    })
                });
            }            
        }        
    }
</script>