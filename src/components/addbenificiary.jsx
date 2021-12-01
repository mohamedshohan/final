import axios from "axios";
import React, { Component } from 'react';
class AddBenificiary extends React.Component {
    state = {
      benificiaryDetails: {
        benificiaryId: "",
        name: "",
        mobileNumber: "",
        
      },
    };
    handleChange = (event) => {
      const benificiaryDetails = { ...this.state.benificiaryDetails }; 
      benificiaryDetails[event.target.name] = event.target.value; 
       console.log(event.target.valu);
      console.log(event.target.name);
      this.setState({ benificiaryDetails: benificiaryDetails});
    };
    handleSubmit = (event) => {
      event.preventDefault();
      console.log("handleSubmit");
      const benificiaryDetails = {
        benificiaryId: this.state.benificiaryDetails.benificiaryId,
        mobileNumber: this.state.benificiaryDetails.mobileNumber,
         name: this.state.benificiaryDetails.name,
          };
         axios
        .post("http://localhost:8080/api/addBenificiary",this.state.benificiaryDetails)
        .then((res) => {
          this.props.history.push("/benificiaryDetails");
        })
        .catch((err) => console.log(err));
    };
  
    render() {
      return (
        <div>
          <h3>Add Benificiary</h3>
          <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
            <div className="mb-3">
              <label for="exampleInputEmail" className="form-label">
                benificiaryId
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail"
               value={this.state.benificiaryDetails.benificiaryId}
                name="benificiaryId"
                onChange={this.handleChange}
              />
             </div>
             <div className="mb-3">
              <label for="exampleInputname" className="form-label">
                name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputname"
                aria-describedby="emailHelp"
                value={this.state.benificiaryDetails.name}
                name="name"
                onChange={this.handleChange}/>
             </div>
             <div className="mb-3">
              <label for="exampleInputmobileNumber" className="form-label">
                mobileNumber
              </label>
              <input
                type="tel"
                className="form-control"
                id="exampleInputmobileNumber"
                aria-describedby="emailHelp"
                value={this.state.benificiaryDetails.mobileNumber}
                name="mobileNumber"
                onChange={this.handleChange}/>
              </div>
              <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
  
  export default AddBenificiary;