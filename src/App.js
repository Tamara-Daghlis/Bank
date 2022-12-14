
import './App.css';
import { Component, Fragment } from 'react';
import Transactions from './components/Transactions';
import axios from 'axios';
import Operations from './components/Operations';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom'
import Breakdown from './components/Breakdown';
import Balance from './components/Balance';

class App extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      totalBalance : 0
    }
  }

  addTransaction = async (transaction) => {
    await axios.post("http://localhost:4000/transaction", transaction)
    this.getTransactions()
  }

   getTransactions = async () => {
    let transactions = await axios.get("http://localhost:4000/transactions")
    this.setState(
      {transactions: transactions.data})
  }

  deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:4000/transaction/${id}`)
    this.getTransactions()
  }

   componentDidMount = () => {
    this.getTransactions()
  }

  render() {
    return (

      <Router>
        <div className='app'>

        <div className='nav-bar'>
            <Link to="/" className='link'>Transactions</Link>
            <Link to="/operations" className='link'>Operations</Link>
            <Link to="/categories" className='link'>Categories</Link>
         </div>

         <Route exact path="/" render={() => 
         <Fragment>
            <Balance transactions={this.state.transactions} />
            <Transactions 
            transactions={this.state.transactions} 
            deleteTransaction={this.deleteTransaction}
            />
         </Fragment>
         }/>

         <Route exact path="/operations" render={() => <Operations addTransaction={this.addTransaction} />} />
         <Route exact path="/categories" render={() => <Breakdown transactions={this.state.transactions}/>} />

        </div>
      </Router>
    )

  }

}

export default App;
