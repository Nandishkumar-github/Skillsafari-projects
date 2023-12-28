import React, {useState} from "react";
import Mealitem from "./Mealitem";
const Meal = () => {
  const[search, setSearch]=useState("");
  const[myMeal, setmyMeal]=useState();
  const searchMeal = (e)=>{
    if(e.key === "Enter")
    {
      fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res=>res.json())
      .then(data=> {
        setmyMeal(data.meals)
      })
    }
  }
  return (
    <div className="main">
      <div className="heading">
        <h1>Search Your Food Recipe</h1>
        <h4>Contrary to popular belief, Lorem Ipsum is not simply random text.</h4>
      </div>
      <div className="searchBox">
        <input type="search" className="search-bar" placeholder="Enter food name" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}></input>
      </div>
      <div className="container">
        {
          (myMeal==null)? <p className="notFound">Not found</p> : myMeal.map((res)=> {
            return(
              <Mealitem data={res}/>
            )
          })
        }
        
      </div>
    </div>
  );
};
export default Meal;
