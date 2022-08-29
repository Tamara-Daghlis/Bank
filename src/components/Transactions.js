import React, { Component } from 'react';
import Transaction from './Transaction';

class Transactions extends Component {
    render() {
        return (
            <div className='transaction-container'>
                {this.props.transactions.map(transaction =>
                    <Transaction
                        transaction={transaction}
                        key={transaction._id} 
                        deleteTransaction={this.props.deleteTransaction} 
                        totalBalance={this.props.totalBalance}/>
                )
                }
            </div>
        )
    }
}

export default Transactions;