import React, { Component } from 'react';
import '../style/transaction.css'
class Transaction extends Component {

    
    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.transaction._id)
    }

    render() {
        const transaction = this.props.transaction
        const totalBalance = this.props.totalBalance
        return (
            <div className='transaction-container'>  
                <div className='amount positive'> Amount: {transaction.amount}</div>
                <div className='vendor'> Vendor: {transaction.vendor}</div>
                <div className='category'>Category: {transaction.category}</div>
                <button className='delete-transaction' onClick={this.deleteTransaction}>Delete</button>
            </div>
            
            
        )
    }
}

export default Transaction;