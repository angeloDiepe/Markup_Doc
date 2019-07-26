import React,{Component} from "react";
import Card from "../Card/Card.js";
import "./CardList.css";

class CardList extends Component{

    render(){
        return(
            <div id="cardlist-container">
            {[0,1,2,3,4,5,6,7,8,9,10].map((el,i) => <Card key={i}/>)}
               
            </div>
        )
    }
}
export default CardList;