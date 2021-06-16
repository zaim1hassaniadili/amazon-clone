import React from 'react'
import Product from "../src/Product"
import "./Home.css"

function home() {
    return (
        <div className="Home">
            <div className="home__container">
                <img  className="home__image"src="../background.jpg" alt=""/>

                <div className="home__row">
                <Product title="The lean startUp. Personal developpement book with a lot of dumb advice about how to grow health in 24h" price={40.0} image=".\lean_startUp.jpg" rating="⭐"/>
          <Product title="James Charles Morphe palette eyeshadow, a lot of colour and surely overprice. But how care it's from James Charles, it's worth it" price={245.6} image=".\morphe_palette.jpg" rating="⭐⭐⭐⭐⭐"/>
                 
                </div>
                <div className="home__row">
                <Product title="Make up kit, hope that that kit will improve your make up skill but, for sur it's won't" price={13.4} image=".\make_kit.jpg" rating="⭐⭐⭐"/>
          <Product title="The lean startUp. Personal developpement book with a lot of dumb advice about how to grow health in 24h" price={40.0}  image=".\lean_startUp.jpg" rating="⭐"/>
          <Product title="Graphique Carte, NVIDIA GeForce RTX series 20" price={1500.0} image=".\graphique_carte.jpg" rating="⭐⭐⭐"/>
                    
                </div>
                <div className="home__row">
                <Product title="LG UltraWide 49WL95C-W 49 overprice for sure. But kinda cool and design so i hope to afford it" price={13444.4} image="..\moniteur.jpg" rating="⭐⭐⭐"/>
                </div>
            </div>
        </div>
    )
}

export default home
