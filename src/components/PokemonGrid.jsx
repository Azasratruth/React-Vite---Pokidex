import React, { use, useState } from "react";
import styles from "./pokemongrid.module.css"
import { fetchData } from "../App";


function PokemonGrid(props) {
    const { handleSelectPokemon, url } = props

    const [search, setSearch] = useState('')

    let data
    if (localStorage.getItem('pokemon-cards')) {
        data = JSON.parse(localStorage.getItem('pokemon-cards'))
    }
    else {
        data = use(fetchData(url))
        localStorage.setItem('pokemon-cards', JSON.stringify(data))
    }

    return (
        <div className={styles.pokemonGrid}>
            <h1 className={styles.header}>My Pokemon</h1>
            <div className={styles.listContainer}>
                <input placeholder="Search Pokemon" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>

            {
                data.results
                    .filter(val => {
                        return val.name.includes(search)
                    })
                    .map((pokemon, index) => {
                        return (
                            <div onClick={handleSelectPokemon(pokemon.name)} key={index} className={styles.pokemon}>
                                {pokemon.name}
                            </div>
                        )
                    })
            }

        </div>
    );
}

export default PokemonGrid;
