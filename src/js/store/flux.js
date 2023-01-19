const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			likesGuardados:[],

		},
		actions: {
			// Use getActions to call a function within a fuction
			giveMeLikes: likes => {
				const store = getStore();
				setStore({ likesGuardados: [...store.likesGuardados,  likes ] });
			},
			
			dotLikeItAnymore: like => {
				const store = getStore();
				setStore({likesGuardados: store.likesGuardados.filter((elemento) => elemento !== like)})
				console.log("hola")
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
