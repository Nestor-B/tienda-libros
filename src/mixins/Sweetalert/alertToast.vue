<script>
    import Swal from 'sweetalert2'

    export default {
        methods: {
            alertToast(titulo, icon, callback = null){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: icon,
                    title: titulo
                }).then(callback)                 
            }  
        }                                                                                    
    }
</script>