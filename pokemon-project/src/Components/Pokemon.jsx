import React, { useEffect, useState } from 'react'
import "../index.css"
import PokemonCards from './PokemonCards';
import Loader from './Loader';

const Pokemon = ({search}) => {
    const[pokemon,setPokemon]=useState([]);
    const[loader,setLoader]=useState(false);
useEffect(()=>{
  setLoader(true);
fetch("https://pokeapi.co/api/v2/pokemon?limit=650").then((res)=>res.json()).then((data)=>{
// console.log(data.results)
  //  data.results.map((dtn)=>console.log(dtn.name))
  let fetchDetails= data.results.map((dtu)=>fetch(dtu.url).then(res=>res.json()));

//waiting for all fetches 
Promise.all(fetchDetails).then((PokemonData)=>{
    console.log(PokemonData);
    setPokemon(PokemonData);
    setLoader(false);
    
})
})
},[])

//Search Functionality

const searchData=pokemon.filter((currpoko)=>currpoko.name.toLowerCase().includes(search.toLowerCase()));


  return (
   <div>
   
      {loader==true && <Loader/>}
    <ul className='cards'>
        {   
           !loader&& searchData.map((currpoko)=><PokemonCards key={currpoko.id} pokemonData={currpoko}></PokemonCards>)
        }
    </ul>
   </div>
   
  )
}

export default Pokemon
