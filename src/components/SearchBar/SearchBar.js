import React from "react";
import search from "../../assets/search.png";
import "./SearchBar.css";
 
const SearchBar=(props)=>{
    return(
        <div id="searchbar-container">
           <img src={search} alt="search"/>
            <input type="text"
             id="searchbar-input" 
             placeholder="search here.........." 
                onFocus={
                    ()=>{
                        let input =document.querySelector('#searchbar-input');
                        input.addEventListener("keyup",((event)=>{
                            if (event.keyCode === 13) {
                                //869334001830309
                                props.setSearchField(input.value);
                            }
                        }));
                    }
                }
            />
        </div>
    )
}

export default SearchBar;