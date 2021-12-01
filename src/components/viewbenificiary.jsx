import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";



class ViewBenificiary extends React.Component {
    state={
        errors: {},
        benificiaryDetails:{
            benificiaryId: "",
            name: "",
            mobileNumber: "",
        },
        
    };
    handleChange = (event) => {
        const benificiaryDetails = { ...this.state.benificiaryDetails }; 
        benificiaryDetails[event.target.name] = event.target.value; 
         console.log(event.target.name);
        console.log(event.target.value);
        this.setState({ benificiaryDetails: benificiaryDetails});
      };
      handleSubmit=(event) =>{
        event.preventDefault();
        let errors=this.validateAll();
        if(this.isValid(errors)){
        console.log("handleSubmit")
        const benificiaryDetails = {
            benificiaryId: this.state.benificiaryDetails.benificiaryId,
            mobileNumber: this.state.benificiaryDetails.mobileNumber,
             name: this.state.benificiaryDetails.name,
            };
        axios.get(`http://localhost:8080/api/getBenificiary/${this.state. benificiaryDetails.benificiaryId}`)
        .then((res) =>{
            console.log(res);
            //this.props.history.push("/bankaccount");
            this.setState({benificiaryDetails:res.data});
        })
        .catch((err) => console.log(err));
      }
      else{
        let s1={...this.state};
         s1.errors=errors;
         this.setState(s1);
       }
     };

     isValid=(errors)=>{
       let keys=Object.keys(errors);
       let count=keys.reduce((acc,curr)=>errors[curr]? acc+1:acc,0);
       return count===0;
     }
     isFormValid=()=>{
       let errors=this.validateAll();
       return this.isValid(errors);
     }
     validateAll=()=>{
       let{benificiaryId}=this.state.benificiaryDetails;
       let errors={};
       errors.benificiaryId=this.validateName(benificiaryId);
      

       if (!benificiaryId) errors.name="id must be entered";
     
       return errors;
     };
     validateName=(benificiaryId)=>
       !benificiaryId ? "id must be entered" : benificiaryId.length<1 ? " enter proper id" : "";

       
render() { 
  let {benificiaryId}=this.state.benificiaryDetails;
  let {errors}=this.state;
    return <div>
<figure class="text-center">
<blockquote class="blockquote">
<h4>Benificiary Details</h4>
</blockquote>
</figure>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label"><h5>Enter Id</h5></label>
                <input type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={this.state.benificiaryDetails.benificiaryId}
                    name="benificiaryId"
                    onChange={this.handleChange}/>
                       {errors.benificiaryId? <span className="text-danger">{errors.benificiaryId}</span>:""}

            </div>  
                <button type="submit" class="btn btn-secondary me-2">Submit</button>

        </form>

        <table className=" table table-striped border-dark border w-75 mx-auto padding">
    
    <thead>
        <tr>
        <th>BenificiaryId</th>
         <th>Name</th>
         <th>MobileNumber</th>
        </tr>
    </thead>
    <tbody>
  <tr>
  <td>{this.state.benificiaryDetails.benificiaryId}</td>
 <td>{this.state.benificiaryDetails.name}</td>
 <td>{this.state.benificiaryDetails.mobileNumber}</td>
 <td>
      <Link to={`/benificiary/update/${ this.state.benificiaryDetails.benificiaryId}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-secondary me-2"
                    />
             </Link>
        </td>
       </tr>
    </tbody>
</table>
</div>
}
}
export default ViewBenificiary;