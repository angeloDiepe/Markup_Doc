import React,{Component}from "react";
import Aux from "../../containers/hoc/Aux.js";
import "./Add.css";

const initialState = {
    domain: "WEB MARKUP",
    title: "",
    subtitle: "",
    content: "",
    author: "",
    date: ""
}
class Add extends Component{
    constructor(props){
        super(props);
        this.state={
            domain:"WEB MARKUP",
            title:"",
            subtitle:"",
            content:"",
            author:"",
            date:""
        }
    }
    onDomainChange=(event)=>{
        this.setState({domain:event.target.value})
    }

    onTitleChange=(event)=>{
        this.setState({title:event.target.value})
    }

    onSubTitleChange=(event)=>{
        this.setState({subtitle:event.target.value})
    }

    onContentChange=(event)=>{
        this.setState({content:event.target.value})
    }

    onAuthorChange=(event)=>{
        this.setState({author:event.target.value})
    }

    onDateChange=(event)=>{
        this.setState({date:event.target.value})
    }
    onSubmit=()=>{
        if (this.state.title && this.state.subtitle && this.state.content && this.state.author && this.state.date) {
      fetch("http://localhost:3001/add", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    category: this.state.domain,
                    domain: this.state.title,
                    question: this.state.subtitle,
                    answer:this.state.content,
                    author:this.state.author,
                    date:this.state.date,
                })

            })
                .then(response => response.json())
                .then(data => {
                    if (data === "added") {
                        alert("Added successfully")
                        this.setState(initialState)
                        document.querySelector("#author-input").value = "";
                        document.querySelector("#date-input").value = "";
                        document.querySelector("#content-input").value = "";
                        document.querySelector("#subtitle-input").value = "";
                        document.querySelector("#title-input").value="";
                        document.querySelector("#domain-input").value = "WEB MARKUP";
                    } else {
                        alert("something went")
                    }
                })
        }else{
            alert("Please Fill all the blankspaces OR Content Already Added")
        }
    } 
    render(){
        return(
            <Aux>
                <span id="add-box" onClick={()=>this.props.handleAdding()}>
                    {(this.props.isAdding===true)? "Close":"Add"}
                </span>
                {(this.props.isAdding === true) ? 
                <div id="add-content-wrapper">
                        <div id="add-content-container">
                        <p id="desc-add">Add Content Form</p>
                        <div id="select">
                            <label htmlFor="dropdown-select">Domain:</label>
                            <select name="dropdown-select"  onChange={(event)=>this.onDomainChange(event)} id="domain-input">
                                <option value="WEB MARKUP">WEB MARKUP</option>
                                <option value="MARKUP CONSULTING">MARKUP CONSULTING</option>
                                <option value="MARKUP DESIGN">MARKUP DESIGN</option>
                            </select>
                        </div>
                        <div id="title">
                            <label htmlFor="title">Title:</label>
                                <input type="text" onChange={(event) => this.onTitleChange(event)} placeholder="javascript" name="title" id="title-input" required/>
                        </div>
                        <div id="subtitle">
                            <label htmlFor="subtitle">SubTitle:</label>
                                <input type="text" onChange={(event) => this.onSubTitleChange(event)} placeholder="Howto Create a modal" name="subtitle" id="subtitle-input" required />
                        </div>
                        <div id="content">
                            <label htmlFor="content">Content:</label>
                                <textarea type="text" onChange={(event) => this.onContentChange(event)} placeholder="javascript" name="content" id="content-input" required/>
                        </div>
                        <div id="author-date">
                            <div id="author">
                                <label htmlFor="author">Author:</label>
                                <input type="text" onChange={(event)=>this.onAuthorChange(event)} placeholder="HERMMANN" name="author" id="author-input" required /></div>
                            <div id="date">
                                <label htmlFor="date">Date:</label>
                                    <input type="datetime-local" onChange={(event) => this.onDateChange(event)} name="date" id="date-input" required/>
                            </div>
                        </div>
                            <button id="submit" onClick={() => this.onSubmit()}  >ADD</button>
                    </div>
                </div>
                :
                null
                }
            </Aux>
            
        )
    }
}

export default Add;