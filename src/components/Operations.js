import React, { Component } from 'react';

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
            <form onSubmit={this.addTransaction}>
                <label>Amount</label>
                <input type="Number" name='amount'/>
                <label>Vendor</label>
                <input type="Text" name='category'/>
                <label>Category</label>
                <input type="Text" name='vendor'/>
                 <button onClick={this.selectButton} name="deposit">Deposit</button>
                 <button onClick={this.selectButton} name="withdraw">Withdraw</button>
            </form>
        )
    }

}

export default Operations;
