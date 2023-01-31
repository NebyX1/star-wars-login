import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const getState = ({getStore, setStore}) => {
    return {
        store: {
            likesGuardados: [],
            personajesGuardados: [],
            vehiculosguardados: [],
            planetasguardados: [],
            vehiculosguardados: [],
            viewPersonajes: [],
            viewPlanets: [],
            viewVehicles: [],
            auth: false
        },
        actions: {

            // Estas son las funciones que se encargan de traer desde la API los nombres de los
            // personajes en la pantalla principal



            // Acá empieza el fetch que nos permite conectar con el BackEnd

            login: (userEmail, userPassword) => {
                fetch('https://3000-nebyx1-practicesqlalche-m5mkx04fv5s.ws-us84.gitpod.io/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "email": userEmail,
                            "password": userPassword
                        }) // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true
                            })
                        }
                        return response.json()
                    })
                    .catch((err) => {console.log(err);Swal.fire({
                        title: 'Error!',
                        text: 'Tenés la contraseña o el mail mal ingresado',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })})
            },

            // Acá termina el fetch que nos permite conectar con el BackEnd

            // Acá está la función de crear un nuevo usuario
            register: (userEmail, userName, userPassword) => {
                fetch('https://3000-nebyx1-practicesqlalche-m5mkx04fv5s.ws-us84.gitpod.io/user', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "email": userEmail,
                            "user_name": userName,
                            "password": userPassword
                        })
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true
                            })
                        }
                        return response.json()
                    })
                    .catch((err) => console.log(err))
            },




// Acá empieza la Función que permite hacer el Logout
logout: () => {
    localStorage.removeItem('token');
    setStore({
        auth: false
    })
},
// Acá termina la función de logout


            buscarPersonajes: () => {
                fetch("https://www.swapi.tech/api/people/").then(res => res.json()).then(data => setStore({personajesGuardados: data.results})).catch(err => console.error(err))
            },


            buscarPlanetas: () => {
                fetch("https://www.swapi.tech/api/planets/").then(res => res.json()).then(data => setStore({planetasguardados: data.results})).catch(err => console.error(err))
            },


            buscarVehiculos: () => {
                fetch("https://www.swapi.tech/api/vehicles/").then(res => res.json()).then(data => setStore({vehiculosguardados: data.results})).catch(err => console.error(err))
            },


            // Estas funciones son las que se encargan de traer desde la API todos los datos hacia las
            // visualizaciones específicas de cada personaje, vehículo o planeta

            functCharacter: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id).then(res => res.json()).then(data => setStore({viewPersonajes: data.result})).catch(err => console.error(err))
            },


            functPlanetas: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id).then(res => res.json()).then(data => setStore({viewPlanets: data.result})).catch(err => console.error(err))

            },

            functVehicle: (id) => {
                fetch("https://www.swapi.tech/api/vehicles/" + id).then(res => res.json()).then(data => setStore({viewVehicles: data.result})).catch(err => console.error(err))
            },

            // Estas dos funciones son las que se encargan de controlar los likes
            // en la pantalla principal

            giveMeLikes: likes => {
                const store = getStore();
                setStore({
                    likesGuardados: [
                        ... store.likesGuardados,
                        likes
                    ]
                });
            },

            dotLikeItAnymore: like => {
                const store = getStore();
                setStore({
                    likesGuardados: store.likesGuardados.filter((elemento) => elemento !== like)
                })
                console.log("hola")
            },


            // Esto no es significativo
            changeColor: (index, color) => { // get the store
                const store = getStore();

                // we have to loop the entire demo array to look for the respective index
                // and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) 
                        elm.background = color;
                    


                    return elm;
                });

                // reset the global store
                setStore({demo: demo});
            }
        }
    };
};

export default getState;
