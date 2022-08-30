import React, { Component } from 'react';
import '../style/operations.css'

class Operations extends Component {

    constructor() {
        super()
        this.state = {
         currentButton: "",
        }
      }

    selectButton = (e) => {
        this.setState({
            currentButton: e.target.name
        })  
    }

    addTransaction = (e) => {
        const transaction ={
            amount  : this.state.currentButton === "deposit" ? e.target.amount.value : e.target.amount.value * -1,
            category : e.target.category.value,
            vendor : e.target.vendor.value,
        }
        this.props.addTransaction(transaction)
    }

    render() {
        return (
            <form onSubmit={this.addTransaction} className="form">
                <div className='amount'>
                <label>Amount</label>
                <input type="Number" name='amount'/>
                </div>
                <div className='vendor'>
                <label>Vendor</label>
                <input type="Text" name='category'/>
                </div>
                <div className='category'> 
                <label>Category</label>
                <input type="Text" name='vendor'/>
                </div>
                <div className='btn'>
                <button onClick={this.selectButton} name="deposit">Deposit</button>
                 <button onClick={this.selectButton} name="withdraw">Withdraw</button>
                </div>   
            </form>
        )
    }

}

export default Operations;
