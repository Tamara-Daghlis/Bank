import React, { Component } from 'react';

class Balance extends Component {

    totalBalance = () => {
        const transactions = this.props.transactions
        let totalBalance = 0 
        
        transactions.map(transaction => {
            totalBalance += transaction.amount
        })
        return totalBalance
    }


    render() {
        let tolatBalance = this.totalBalance()
        return (
            <div>
             Total Balance: $
            {tolatBalance > 500 ? (
          <span className="green-balance">{tolatBalance}</span>
            ) : (
          <span className="red-balance">{tolatBalance}</span>
           )}
      </div>
        );
    }
}

export default Balance;