import React from "react";
import { useState, useEffect } from "react";
import CartShimmer from "./CartShimmer";

let Body=()=>{
   
   
    let [inputText, setInputText] = useState('');
    let [searchText, setSearchText] = useState('');
    let [JsonValue, setJsonValue] = useState(null)
 
    // Handle input change
    const handleInputChange = (e) => {
        setInputText(e.target.value);
       // inputText=e.target.value
    };

    // Handle search button click
    const handleSearchClick = () => {
        setSearchText(inputText);
       // searchText=inputText
    };
    
    // Use useEffect to store the final search text
    useEffect(() => {
        if (searchText) {
        // You can also make an API call or perform any other side effect here  
            FetchData();
        }
    }, [searchText]);
   
    const FetchData = async ()=>{
        let link="https://api.spoonacular.com/recipes/complexSearch?apiKey=d2925054cb7e42f4b2b347d53c19e449&query="+searchText;
        const data = await fetch(link);
        const jsonData = await data.json();
        setJsonValue(jsonData);
   }

    return(
        
        <div id="body">
            
            <div class="search-container">
               <input type="text" placeholder="Enter Your Recipes" class="search-bar"  onChange={handleInputChange}/>
               <button type="submit" class="search-button" onClick={handleSearchClick}>Search</button>
            </div>

            {
               JsonValue===null &&
                 <CartShimmer/>
            }
            
            {
                JsonValue!==null &&
                <div class="user-details">
                <img src={JsonValue.results[0].image} alt="User Image" class="user-image"/>
                <p><strong>Name:</strong> {JsonValue.results[0].id+" "+JsonValue.results[0].title}</p>
                <img src={JsonValue.results[1].image} alt="User Image" class="user-image"/>
                <p><strong>Name:</strong> {JsonValue.results[1].id+" "+JsonValue.results[1].title}</p>
                <img src={JsonValue.results[2].image} alt="User Image" class="user-image"/>
                <p><strong>Name:</strong> {JsonValue.results[2].id+" "+JsonValue.results[2].title}</p>
                {/* <div class="details">
                
                
                {/*<p><strong>City:</strong> {JsonValue.result[0].city}</p>*/}
                
                {/* <p><strong>Country:</strong> {JsonValue.result[0].country}</p>
                <p><strong>College Name:</strong> {JsonValue.result[0].organization}</p>
                <p><strong>Current Rating:</strong> {JsonValue.result[0].rating+" "+JsonValue.result[0].rank}</p>
                <p><strong>Maximum Rating:</strong> {JsonValue.result[0].maxRating+" "+JsonValue.result[0].maxRank}</p>
                <p><strong>Total Friends:</strong> {JsonValue.result[0].friendOfCount}</p> 
                </div> */}
                </div>
            }
        </div>
    )
}

export default Body;