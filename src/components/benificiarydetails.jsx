
import axios from "axios";
import React, { Component } from "react";
import{Link} from "react-router-dom";


class BenificiaryDetails extends React.Component
{
   
state={
    benificiarydetails:[],
    
    
};
componentDidMount(){
    axios.get("http://localhost:8080/api/viewAllBenificiary")
    .then((res) =>{
        console.log(res);
        this.setState({benificiarydetails: res.data});
    }) 
    .catch((err) => console.log(err));

    }

    handleDelete = (bid) => {
      axios.delete(`http://localhost:8080/api/deleteBenificiary/${bid}`).then((res) => {
        const benificiarydetails = this.state.benificiarydetails.filter((ben) => ben.benificiaryId !=bid);
        this.setState({ benificiarydetails: benificiarydetails });
      });
    };
    render() {
        return (
          <div className="container mt-3">
            <Link
              to="/benificiary/add"
              className="btn btn-secondary btn-large mb-1 float-end my-1"
            >
              Add
            </Link>
            
                <table className="table table-dark table-striped w-75 mx-auto my-3">
                    <thead>
                        <tr>
                            <th>BenificiaryId</th>
                            <th>Name</th>
                            <th>MobileNumber</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.benificiarydetails.map((benificiary) =>(
                        <tr>
                            <td>{benificiary.benificiaryId}</td>
                            <td>{benificiary.name}</td>
                            <td>{benificiary.mobileNumber}</td>
                              
                            <td>
                  <Link to={`/benificiary/update/${ benificiary.benificiaryId}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-secondary me-2"
                    />
                  </Link>
                <input
                  type="button"
                  value="Delete"
                  className="btn btn-outline-danger"
                  onClick={() => this.handleDelete(benificiary.benificiaryId)}
                />
              </td>
                      </tr>
                       ))}
                     </tbody>
                    </table>
                  </div>
                   );
                 }
                }
    export default BenificiaryDetails;