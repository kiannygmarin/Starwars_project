const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			planets: [],
			characterDetails:{},
			planetDetails:{},
			favorites:[]
		},
		actions: {
			getCharacters: ()=>{
				fetch('https://swapi.dev/api/people')
				.then((response)=>response.json())
				.then(data => setStore({character: data.results}))
			},
			getCharacterData: (index)=>{
				fetch(`https://www.swapi.tech/api/people/${index}`)
				.then((response)=>response.json())
				.then(data => setStore({characterDetails: data.result}))
				.catch(error => console.error("Error fetching character data:", error));
			},
			getPlanets: ()=>{
				fetch('https://swapi.dev/api/planets')
				.then((response)=>response.json())
				.then(data => setStore({planets: data.results}))
			},
			getPlanetData: (index)=>{
				fetch(`https://www.swapi.tech/api/planets/${index}`)
				.then((response)=>response.json())
				.then(data =>setStore({planetDetails:data.result}))
			},
			addFavorite(nombreItem){
				const store = getStore();
				const fav = store.favorites;
				const newFav = [...fav, { name: nombreItem, id:fav.length }]
				setStore({favorites: newFav})
			},

			deleteFavorite(id){
				const store = getStore();
				const fav = store.favorites;
				const favActualizado = fav.filter((item) => item.id !== id);
				setStore({favorites: favActualizado})
			}
		}			
	};
};

export default getState;