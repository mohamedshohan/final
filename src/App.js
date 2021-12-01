import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Navbar from './components/navbar';
import MobileNo from './components/entermobile';
import CreateAccount from './components/createAccount';
import CusById from './components/customerById';
import UpdateAcc from './components/updateAccount';
import Deposite from './components/deposite';
import Withdraw from './components/withdraw';
import FundTransfer from './components/fundtransfer';
import ViewCus from './components/viewcustomerRedux'
import PageNotFound from './components/pagenotfound';
import Home from './components/Home';
import TransactionForm from './components/transactionForm';
import TransactionType from './components/transactionType';
import TransactionDate from './components/transactionDate';
import Transaction from './components/transaction';
import BillPayments from "./components/billpayments";
import AddBillPayment from './components/addbillpayment';
import Slides from './components/slides';
import AddAccount from './components/addbankaccount';
import ViewBankAccount from './components/viewbankaccount';
import UpdateBankAccount from './components/updatebankaccount';
import BankAccount from './components/bankaccount';
import Customer from './components/customer';
import AddCustomer from './components/addcustomer';
import UpdateCustomer from './components/updatecustomer';
import getCustomerbymobileNo from './components/getCustomerbymobileNo';
import Logout from './components/logout';
import Login from './components/login';
import CusHome from './components/customerhomepage';

import BenificiaryDetails from './components/benificiarydetails';
import AddBenificiary from './components/addbenificiary';
import UpdateBenificiary from './components/updatebenificiary';
import ViewBenificiary from './components/viewbenificiary';
import BenificiaryByMobile from './components/benificiarybymobile';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom"
import { connect } from "react-redux";
function App(props) {
  return (
    <Router>
    <div className="App">
     {props.login.loggedIn && <Navbar /> }
     
      {/* <Link
          to="/getCustomerbyId/:cid"
          className="btn btn-secondary  mb-2 mt-2 "
        >
          Your Account
        </Link> */}
    </div>
    <Switch>
      

    <Route path="/cushome" component={CusHome}/>
    <Route path="/login" component={Login}/>
    <Route path="/logout" component={Logout} />
    <Route path="/createAcc" component={CreateAccount}/>
    <Route path="/showBalance/:mobileNo" component={MobileNo}/>
    <Route path="/getCustomerbyId" component={CusById}/>
    <Route path="/updateAccount/:cid" component={UpdateAcc}/>
    <Route path="/makeDeposit/:mobileNo/:amount" component={Deposite}/>
    <Route path="/withdrawMoney/:mobileNo/:amount" component={Withdraw}/>
    <Route path="/transferMoney/:sourcemobileNo/:targetMobileNo/:amount" component={FundTransfer}/>
    <Route path="/viewAccount" component={ViewCus}/>


    <Route path="/Customer" component={Customer}/>
    <Route path="/addCustomer" component={AddCustomer}/>
    <Route path="/updatecustomer" component={UpdateCustomer}/>
     <Route path="/getCustomerbymobileNo" component={getCustomerbymobileNo}/>
    


        <Route exact path="/transaction" component={Transaction}/>
        <Route exact path="/addTrans/add" component={TransactionForm}/>
        <Route exact path="/transaction/transactionType/:transactionType"component={TransactionType}/>
        <Route exact path="/transaction/transactionDate/:transactionDate"component={TransactionDate}/>


        <Route path="/addaccount/add" component={AddAccount}/>
        <Route path="/bankaccount/viewaccount/:accountNo" component={ViewBankAccount}/>
        <Route path="/updateaccountt/:accountNo" component={UpdateBankAccount}/>
        <Route path="/bankaccount" component={BankAccount}/>

        <Route path="/ph/add" component={AddBillPayment} />
        <Route path="/ph" component={BillPayments} />

    <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />


 <Route path="/benificiarydetails" component={BenificiaryDetails}/>
<Route path="/benificiary/add" component={AddBenificiary}/>
<Route path="/benificiary/update/:benificiaryId" component={UpdateBenificiary}/>
<Route path="/viewbenificiary" component={ViewBenificiary}/>
<Route path="/benificiarybymobile" component={BenificiaryByMobile}/>
    </Switch>
    </Router>
  );
}
const mapStateToProps = (state) => {
  //  const { fakestore } = state;
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(App);

// export default App;
