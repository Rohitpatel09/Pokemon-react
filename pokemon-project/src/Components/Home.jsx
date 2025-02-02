import React from 'react'

const Home = ({HandleFetchBtn}) => {
  return (
    <div className="containerr">
        <div className="navbarr">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokémon Logo" className="imgs"/>
            <div className="navLinkss">
                
            </div>
            <div className="searchsigninn">
                <input type="text" className="searchboxx" placeholder="Search"/>
                <button className="signinbtnn">Login In</button>
            </div>
        </div>

        <div className="maincontentt">
            <div className="textcontentt">
                <h1 className="heading">Step into the World of <br/> POKÉMON Detective Pikachu</h1>
                <div className="emailsignupp">
                  
                    <button className="esbtn" onClick={()=>HandleFetchBtn("Click")}>Catch Pokémon</button>
                </div>
            </div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu" className="pikachuimgg"/>
        </div>
    </div>
  )
}

export default Home
