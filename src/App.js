
import './App.css';
import { Component } from 'react';
import Transactions from './components/Transactions';
import axios from 'axios';
import Operations from './components/Operations';


class App extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
    }
  }

  addTransaction = async (transaction) => {
    await axios.post("http://localhost:4000/transaction", transaction)
    this.getTransactions()
  }


  // addTransaction =async (e)=>{
  //   // let amount =e.target.amount.value
  //   // let vendor =e.target.vendor.value
  //   // let category =e.target.category.value
  //   // console.log(category);
  //   // console.log("Hi");
  //   console.log(e.target);

  // }

   getTransactions = async () => {
    let transactions = await axios.get("http://localhost:4000/transactions")
    this.setState({transactions: transactions.data})
  }

  deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:4000/transaction/${id}`)
    this.getTransactions()
  }

  // totalBalance = () => {
  //   let transactions = this.setState.transactions
  //   let tolatBalance = 0
  //   transactions.map(transaction => {
  //     tolatBalance += transaction.amount
  //   }) 
  //   return tolatBalance
  // }

   componentDidMount = () => {
    this.getTransactions()
  }

  render() {
    return (
      <div>
        <Transactions transactions={this.state.transactions} deleteTransaction={this.deleteTransaction}/>
        <Operations addTransaction={this.addTransaction} />
      </div>

    )

  }

}

export default App;
