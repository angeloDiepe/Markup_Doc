import React,{Component} from 'react';
import Slider from "./Components/Slider/Slider.js";
import Welcome from "./Components/Welcome/Welcome.js";
import Presentation from "./Components/Presentation/Presentation.js";
import Menu from "./Components/Menu/Menu.js";
import Modal from "./Components/Modal/Modal.js";
import Aux from "./Components/Aux/Aux.js";
import Form from "./Components/Form/Form.js";
import Services from "./Components/Services/Services.js";
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      isBlock:false,
      isForm:false,
      commander: 1
    }
  }
  render(){
    const isBlock=this.state.isBlock;
    this.handleModal=(set)=>{
      this.setState({isBlock:set})
    }
    this.setCommander=(set)=>{
      this.setState({commander:set})
    }
    this.handleCommander=(props)=>{
        if (this.state.commander===1) {
         return <button id="commander1"  className="commander" onClick={()=>props.handleModal(true)}>Commander</button>
        } else 
        if (this.state.commander===2) {
          return <button id="commander2"  className="commander" onClick={()=>props.handleModal(true)}>Commander</button>
    }
      else 
        if (this.state.commander===3) {
          return <button id="commander3"  className="commander" onClick={()=>props.handleModal(true)}>Commander</button>    }
    else 
        if (this.state.commander===4) {
          return <button id="commander4"  className="commander" onClick={()=>props.handleModal(true)}>Commander</button>    }
  }
    const isForm=this.state.isForm;
    this.handleForm=(setForm)=>{
      this.setState({isForm:setForm})
    }
 let container=<Aux>
     {isBlock?
       (<Modal handleModal={this.handleModal} handleForm={this.handleForm}/>):
      (null)}
    <Slider setCommander={this.setCommander} />
    <Welcome/>
    <Presentation handleModal={this.handleModal} handleCommander={this.handleCommander}/>
    <Menu/>
    <Services/>
    </Aux>
    let children;
    if (isForm) {
      children = <Form handleForm={this.handleForm}/> ;
    } else {
      children =container;
    }

  return (
    <Aux>
      <div className="pag">
      <div className="times"></div>
    </div>
      <div className="App">{children}</div>
    </Aux>
  );
}
}
export default App;
