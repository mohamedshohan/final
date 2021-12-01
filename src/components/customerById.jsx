import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
class CusById extends React.Component {
  state = {

    errors:{},


      customer: {
          cid:"",
        name: "",
        mobileNo: "",
        password: "", 
      },
    };
    componentDidMount(){
      axios.get(`http://localhost:8080/api/getCustomerbymobileNo/${this.props.login.username}`)
      .then(responce=>{
          console.log(responce.data[1]);
          this.setState({customer:responce.data});
      })
     }       
    render() { 
     
        return <div>
 <figure class="text-center">
  <blockquote class="blockquote">
    <h3>Account</h3>
  </blockquote>
  </figure>
            
            <table className=" table table-striped border-dark border w-75 mx-auto padding">
        
        <thead>
            <tr>
                <th >Customer Id</th>
                <th>Name</th>
               
                <th>Mobile</th>
                 <th>Password</th>
                
                
            </tr>
        </thead>

    <tbody>
      
        <tr>
             <td>{this.state.customer.cid}</td>
            <td>{this.state.customer.name}</td>
           
            <td>{this.state.customer.mobileNo}</td>
            <td>{this.state.customer.password}</td>
            <td>
            <Link
          to={`/updateAccount/${this.state.customer.cid}`}
          className="btn btn-secondary btn-large mb-2 mt-2 "
        >
          Update
        </Link>
            </td>
           
            
            
        </tr>
        
    </tbody>
   
    </table>
   
    
</div>
}
}
const mapStateToProps = (state) => {
  //  const { fakestore } = state;
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(CusById);