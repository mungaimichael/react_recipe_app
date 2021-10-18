import React from 'react'
import LocationCard from './LocationCard';
import mombasa from '../cities-imgs/mombasa.jpeg';
import kisumu from '../cities-imgs/kisumu.jpeg';
import nakuru from '../cities-imgs/nakuru.jpeg';


const Sectionthree = () => {
    return (
      <div className="section-three">
        <h1>recipe samples from all over the country</h1>
        <div className="cards-container">
          <LocationCard
            text="pilau and biriani recipes from kisumu"
            img={mombasa}
          />
          <LocationCard 
          text="fish recipes from kisumu" 
          img={kisumu} />
          <LocationCard 
          text="irio \ mukimo recipes from Nakuru" 
          img={nakuru} />
        </div>
      </div>
    );
}

export default Sectionthree
