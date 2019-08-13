import React,{Component} from "react";
import {connect} from "react-redux"
import Card from "../Card/Card.js";
import {loadQna} from "../../actions.js"
import "./CardList.css";

const mapStateToProps=state=>({
        qna:state.handleLogging.qna,
        tab: state.handleLogging.tab,
        navigation:state.handleLogging.navigation,
    })
const mapDispatchToProps = dispatch => ({
    loadQna: (qna) => dispatch(loadQna(qna)),
})
class CardList extends Component{  
        componentDidMount() {
        fetch(`http://localhost:3001/${this.props.tab}/${this.props.navigation}`, {
            method: "get",
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(qna => this.props.loadQna(qna))
    }
    componentDidUpdate(prevProps) {
        if (this.props.tab !== prevProps.tab || this.props.navigation !== prevProps.navigation){
            console.log("from componentdidupdate",prevProps)
        fetch(`http://localhost:3001/${this.props.tab}/${this.props.navigation}`, {
            method: "get",
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(qna => this.props.loadQna(qna))
        }
    }
 
    render(){
        return(
            <div id="cardlist-container">
            {console.log(this.props)}
                {(this.props.qna.length===0)?
                    <div id="loading-container">
                        <span id="loading0"></span>
                        <span id="loading1"></span>
                        <span id="loading2"></span>
                    </div>
                    :
                    this.props.qna.map((el, i) => <Card key={i} qna={el}/>)
                }
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CardList);