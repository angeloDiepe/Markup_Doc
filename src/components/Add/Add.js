import React from "react";
import Aux from "../../containers/hoc/Aux.js";
import "./Add.css";
const Add=(props)=>{
    return(
        <Aux>
            <span id="add-box" onClick={()=>props.handleAdding()}>
                {(props.isAdding===true)? "Close":"Add"}
            </span>
            {(props.isAdding === true) ? 
            <div id="add-content-wrapper">
                <form id="add-content-container">
                    <p id="desc-add">Add Content Form</p>
                    <div id="select">
                        <label htmlFor="dropdown-select">Domain:</label>
                        <select name="dropdown-select">
                            <option value="WEB MARKUP">WEB MARKUP</option>
                            <option value="MARKUP CONSULTING">MARKUP CONSULTING</option>
                            <option value="MARKUP DESIGN">MARKUP DESIGN</option>
                        </select>
                    </div>
                    <div id="title">
                        <label htmlFor="title">Title:</label>
                        <input type="text" placeholder="javascript" name="title" required/>
                    </div>
                    <div id="subtitle">
                        <label htmlFor="subtitle">SubTitle:</label>
                        <input type="text" placeholder="Howto Create a modal" name="subtitle" required />
                    </div>
                    <div id="content">
                        <label htmlFor="content">Content:</label>
                        <textarea type="text" placeholder="javascript" name="content" required/>
                    </div>
                    <div id="author-date">
                        <div id="author">
                            <label htmlFor="author">Author:</label>
                            <input type="text" placeholder="HERMMANN" name="author" required /></div>
                        <div id="date">
                            <label htmlFor="date">Date:</label>
                            <input type="datetime-local" name="date" required/>
                        </div>
                    </div>
                    <input type="submit" id="submit" value="ADD"/>
                </form>
            </div>
            :
            null
            }
        </Aux>
        
    )
}

export default Add;