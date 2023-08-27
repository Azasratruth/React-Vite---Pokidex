import { Suspense, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import PokemonGrid from "./components/PokemonGrid";
import PokemonCard from "./components/PokemonCard";

export async function fetchData(url) {
    const res = await fetch(url)
    return res.json()
}

function App() {

    const [selectedPokemon, setSelectedPokemon] = useState(null);

    // const url = 'https://pokeapi.co/api/v2/ability/'
    const url = 'https://pokeapi.co/api/v2/pokemon/'

    function handleSelectPokemon(pokemon) {
        return () => setSelectedPokemon(pokemon)
    }

    return (
        <ErrorBoundary fallback={<div>Error...</div>}>
            <Suspense fallback={<div>Loading...</div>}>
                {selectedPokemon ?

                    <PokemonCard parentUrl={url} pokemon={selectedPokemon} clearHandler={() => setSelectedPokemon(null)} />
                    :
                    <PokemonGrid url={url} handleSelectPokemon={handleSelectPokemon} />
                }
            </Suspense>
        </ErrorBoundary>
    );
}

export default App;
