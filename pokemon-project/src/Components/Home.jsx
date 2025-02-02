import React from 'react'
import styles from "./Home.module.css"
const Home = ({HandleFetchBtn}) => {
  return (
    <div className={styles.containerr}>
        <div className={styles.navbarr}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokémon Logo" className={styles.imgs}/>
            <div className={styles.navLinkss}>
                
            </div>
            <div className="searchsigninn">
                <input type="text" className={styles.searchboxx} placeholder="Search"/>
                <button className={styles.signinbtnn}>Login In</button>
            </div>
        </div>

        <div className={styles.maincontentt}>
            <div className={styles.textcontentt}>
                <h1 className={styles.heading}>Step into the World of <br/> POKÉMON Detective Pikachu</h1>
                <div className={styles.emailsignupp}>
                  
                    <button className={styles.esbtn} onClick={()=>HandleFetchBtn("Click")}>Catch Pokémon</button>
                </div>
            </div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu" className={styles.pikachuimgg}/>
        </div>
    </div>
  )
}

export default Home
