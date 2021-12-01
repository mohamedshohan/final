import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";



function Navbar(props){
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">Wallet</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
              <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/cushome"
                  >
                    Home
                  </NavLink>
              </li>
        
              <li className="nav-item">
              {props.login.loggedIn && props.login.role == "customer" && (
              <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/getCustomerbyId"
                  >
                    My Account
                  </NavLink>)}
              </li>
              <li className="nav-item">
              {props.login.loggedIn && props.login.role == "admin" && (
              <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/transaction"
                  >
                    Transactions
                  </NavLink>)}
              </li>
             
              <li className="nav-item">
              {props.login.loggedIn && props.login.role == "admin" && (
              <NavLink
              
                    className="nav-link active"
                    aria-current="page"
                    to="/viewAccount"
                  >
                    View Accounts
                  </NavLink>)}
              </li>
             
             
              
              <li className="nav-item dropdown">
              {props.login.loggedIn && props.login.role == "customer" && (
              <NavLink
                    className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                    aria-current="page"
                    to="/"
                  >
                    Bank
                  </NavLink>)}
                <ul className="dropdown-menu"  aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">
              <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/bankaccount/viewaccount/:accountNo"
                  >
                    Edit Accounts
                  </NavLink>
              </li>
                <li className="dropdown-item">
              <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/addaccount/add"
                  >
                    Add Accounts
                  </NavLink>
              </li>
                
            
             
                </ul>
              </li>
             
             
             
              
              <li className="nav-item dropdown">
              {props.login.loggedIn && props.login.role == "customer" && (
              <NavLink
                    className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                    aria-current="page"
                    to="/"
                  >
                    Actions
                  </NavLink>)}
                <ul className="dropdown-menu"  aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">
              <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/showBalance/:mobileNo"
                  >
                    Balance
                  </NavLink>
              </li>
                <li className="dropdown-item">
              <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/makeDeposit/:mobileNo/:amount"
                  >
                    Deposite Amount
                  </NavLink>
              </li>

                
              <li className="dropdown-item">
              <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/withdrawMoney/:mobileNo/:amount"
                  >
                    Withdraw Amount
                  </NavLink>
              </li>
              <li className="dropdown-item">
              <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/transferMoney/:sourcemobileNo/:targetMobileNo/:amount"
                  >
                    Fund Transfer
                  </NavLink>
              </li>
              <li className="dropdown-item">
              <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/ph/add"
                  >
                    Pay Bill
                  </NavLink>
              </li>
                </ul>
              </li>
              
              
              <li className="nav-item dropdown">
              {props.login.loggedIn && props.login.role == "admin" && (
              <NavLink
                    className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                    aria-current="page"
                    to="/"
                  >
                    Admin Actions
                  </NavLink>)}
                <ul className="dropdown-menu"  aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">
              <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/Customer"
                  >
                    customer
                  </NavLink>
              </li>
              <li className="dropdown-item">
              <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/ph"
                  >
                    All Bills
                  </NavLink>
              </li>
                </ul>
              </li>
              
              <li className="nav-item">
              <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/logout"
                  >
                    Logout
                  </NavLink>
              </li>

            </ul>
            <form className="d-flex ms-auto">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
          </div>
        </div>
      </nav>
      </div>
      
      

    )
}
const mapStateToProps = (state) => {
  //  const { fakestore } = state;
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(Navbar);