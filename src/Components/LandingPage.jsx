import React  from 'react'
import Header from './Header'
import Hero from './Hero'

const LandingPage = ({ handleSubmit, handleSearch }) => {
  return (
    <div className="landingpage">
      <Header
        handleSubmit={handleSubmit}
        handleSearch={handleSearch}
      />
      {/* <RecipeContainer recipe ={recipe} /> */}
      <Hero />
    </div>
  );
};

export default LandingPage
