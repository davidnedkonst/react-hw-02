export default function fetchPokemon(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const errorMsg = `Name ${name} not found`;
    return fetch(url)
        .then(
            response => {
                if (response.ok) return response.json();
                if (!response.ok) return Promise.reject(new Error(errorMsg));
            });
}