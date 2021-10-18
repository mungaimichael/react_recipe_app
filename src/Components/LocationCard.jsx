import React from 'react'

const LocationCard = ({text,img}) => {
    return (
      <div className="location-card">
        <img src={img} alt="" />
        <h2>{text}</h2>
      </div>
    );
}

export default LocationCard
