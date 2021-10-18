import React from "react";
// import { REACT_APP_KEY, REACT_APP_ID, BASE_URL } from "../configs";

// import Axios from 'axios';

const SectionTwo = () => {
  
  //state ro handle the random meal 
//   const [searchQuery, setsearchQuery] = useState('')

// // Function to fetch data when component first mounts 
// const foodArray = [
//   "soup",
//   "beef",
//   "pork",
//   "beans",
//   "soup",
//   "beef",
//   "pork",
//   "beans",
// ];

// const randomRecipeIndex = Math.floor(Math.random() * foodArray.length);

//  const getRandomRecipe = async () => {
//    let response = await Axios.get(
//      `${BASE_URL}?q=${foodArray[randomRecipeIndex]}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEY}`
//    );
//    let recipe = await response.data.hits;
//   console.log(recipe)
//  };

//  searchQuery ? <Compomponent/>:""`

// useEffect(()=>{
// getRandomRecipe()
 
// })



  return (
    <>
      <div className="section-two">
        <main>
          <div className="salad-and-soup">
            <div className="saladcontainer">
              <h3>
                you should eat every piece of your salad cause veges are good
                for your health
              </h3>
            </div>
            <div className="soupcontainer">
              <h3>
                we have hundreds of recipes showing you how to make different
                types of soups
              </h3>
            </div>
          </div>
          <div className="quickmeals">
            <h4> quick recipes for fast meals</h4>
            <ul className="quickmealslist">
              <li id="one">
                <div className="image"></div>
              </li>
              <li id="two">
                <div className="image"></div>
              </li>
              <li id="three">
                <div className="image"></div>
              </li>
              <li id="four">
                <div className="image"></div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export default SectionTwo
