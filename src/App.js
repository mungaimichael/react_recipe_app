import React, { useState}from 'react';
import Axios from 'axios';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import Sectionthree from './Components/Sectionthree';
import { REACT_APP_KEY,REACT_APP_ID,BASE_URL} from "./configs"

import SectionTwo from './Components/SectionTwo';
const App = () => {
  // search query from input field
  const [searchQuery, setsearchQuery] = useState('');
  const [Recipes, setRecipes] = useState([]);
  


  const getData = async () =>{
    let response = await Axios.get(`${BASE_URL}?q=${searchQuery}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEY}`);
    let recipe = await response.data.hits;
    setRecipes(recipe);
  };

  const handleSearch = (text) =>{
    setsearchQuery(text);
    console.log(searchQuery)
  } 
  
  const handleSubmit = async () =>{
     await getData();
    setsearchQuery('');
  }




  return (

    <div className ='main-container'>
      <LandingPage 
      handleSubmit ={handleSubmit}
        handleSearch={handleSearch}
      recipe ={Recipes.map(item => item.recipe)}
      search = {searchQuery}/>
      <SectionTwo recipe ={Recipes.map(recipe => recipe)}/>
      <Sectionthree/>
      <Footer/>
    </div>
  )
}

export default App 
