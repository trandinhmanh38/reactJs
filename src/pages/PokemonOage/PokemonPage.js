import React, {useState} from "react";
import axios from "axios";
import {useEffect} from "react";
import './Pokemon.css';

const CancelToken = axios.CancelToken;
const PokemonPage =() =>{
    const [pokemonIdDisplayed, setPokemonIdDisplayed] = useState(1);
    const[pokemon, setPokemon] = useState({
        id: null,
        name: null,
        weight: null,
        frontImage: null,
        backImage: null
    });
    const [isLoading, setIsLoading] = useState(true);
    const[errorMessage, setErrMessage] = useState('');
    useEffect(() => {
        let cancel = null;
        setIsLoading(true);
        axios({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${pokemonIdDisplayed}`,
            cancelToken: new CancelToken(c =>{
                cancel = c;
            })
        })
            .then(response => {
            // console.log('response = ', response);
            setIsLoading(false);
            setPokemon({
                id: response.data.id,
                name: response.data.name,
                weight: response.data.weight,
                frontImage: response.data.sprites.front_default,
                backImage: response.data.sprites.back_default
            })
        })
            .catch( error => {
                console.log('err = ', error);
                setIsLoading(false);
                setErrMessage(error.message);
            })
        return () => {  //clean up
            cancel();
        }
    }, [pokemonIdDisplayed]);
    // console.log('id display', pokemonIdDisplayed);
    if(isLoading) return 'Loading...';
    if(errorMessage) return <div style={{color : 'red'}}>{errorMessage}</div>
    return(
        <div className="pokemon-page">
            <div> ID: { pokemon.id}</div>
            <div> Name: { pokemon.name}</div>
            <div> Weight: { pokemon.weight}</div>
            <div>
                <img src={ pokemon.frontImage}/>
                <img src={ pokemon.backImage}/>

            </div>
            <div>
            <button
                className="button__pokemon"
                onClick={ () => setPokemonIdDisplayed(pokemonIdDisplayed - 1)}
                disabled={ isLoading }
            >
                Previous
            </button>

            <button
                className="button__pokemon"
                onClick={ () => setPokemonIdDisplayed(pokemonIdDisplayed + 1)}
                disabled={ isLoading }
            >
                Next
            </button>
            </div>
        </div>
    );
};
export default PokemonPage;