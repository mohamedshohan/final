import React, { Component } from 'react';
import axios from "axios";

class UpdateBenificiary extends React.Component {
    state = {
        benificiaryDetails: {
          benificiaryId: "",
          name: "",
          mobileNumber: "",
          
        },
      };
      componentDidMount(){
        axios
        .get(
          `http://localhost:8080/api/getBenificiary/${this.props.match.params.benificiaryId}`
        )
         .then((res) => {
         this.setState({ benificiaryDetails:res.data});
        })
         .catch((err) => console.log(err));
    }
    handleChange = (event) => {
      const benificiaryDetails = { ...this.state.benificiaryDetails }; 
      benificiaryDetails[event.target.name] = event.target.value; 
       console.log(event.target.value);
      console.log(event.target.name);
      this.setState({ benificiaryDetails: benificiaryDetails});
    };
    handleSubmit = (event) => {
      event.preventDefault();
      console.log("handleSubmit");
      const benificiaryDetails = {
        benificiaryId: this.props.match.benificiaryId,
        mobileNumber: this.state.benificiaryDetails.mobileNumber,
         name: this.state.benificiaryDetails.name,
          };
         axios
        .put("http://localhost:8080/api/updateBenificiary",this.state.benificiaryDetails)
        .then((res) => {
          this.props.history.push("/benificiaryDetails");
        })
        .catch((err) => console.log(err));
    };
  
    render() {
      return (
        <div>
          <h3>Update Benificiary</h3>
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
  
 


export default UpdateBenificiary;