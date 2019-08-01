import React,{Component} from "react";
import NavAdmin from "../../components/NavAdmin/NavAdmin.js"
import "./AdminManage.css";
class AdminManage extends Component{
    render(){
        console.log('adminmanage')
        return(
            <div id="admin-manage-wrapper">
            <header>Markup-Doc Administration</header>
                <NavAdmin setLoggedIn={this.props.setLoggedIn}/>
            </div>
        )
    }
}
export default AdminManage;