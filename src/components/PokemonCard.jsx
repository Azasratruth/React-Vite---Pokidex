import React, { use } from 'react'
import styles from './pokemoncard.module.css'
import { fetchData } from '../App'

function PokemonCard(props) {

    const { pokemon, clearHandler, parentUrl } = props

    const pokemonUrl = parentUrl + pokemon
    const data = use(fetchData(pokemonUrl))

    return (
        <div className={styles.card}>
            <div className={styles.headerBar}>
                <h1>{pokemon}</h1>
                <div onClick={clearHandler}>x</div>
            </div>
            <img srcSet={data.sprites.front_default} alt={pokemon} />
            <h3>Stats</h3>
            {data.stats.map((stat, index) => {
                return (
                    <div key={index}>
                        <p><b>{stat.stat.name}</b>: {stat.base_stat}</p>
                    </div>
                )
            })}
            <h3>Types</h3>
            {data.types.map((type, index) => {
                return (
                    <div key={index}>
                        <p><b>{type.type.name}</b></p>
                    </div>
                )
            })}
        </div>
    )
}

export default PokemonCard