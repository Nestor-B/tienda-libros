<script>
    import { getAuth, signOut } from "firebase/auth"

    export default {
        methods: {
            CerrarSesion(){
                const auth = getAuth();
                signOut(auth).then(() => {
                    sessionStorage.clear()
                    location.reload()
                })               
            }
        }
    }
</script>