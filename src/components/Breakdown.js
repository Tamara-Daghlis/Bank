import React, { Component } from 'react';
import '../style/breakdown.css'

class Breakdown extends Component {

    listedCategories = () => {
        const transactions = this.props.transactions
        const categories ={}
        transactions.map(transaction => {
            if(!categories[transaction.category]) {
                categories[transaction.category] = transaction.amount
            } else {
                categories[transaction.category] += transaction.amount
            }
        })
        
        return categories
    }

    render() {
        let categories = this.listedCategories()
        return (
            <div className="categories-container">
                {Object.keys(categories).map((category => {
                   return (
                    <div className='breakdown'>
                        <span>{category}:</span>
                        <span>{categories[category]}</span>
                    </div>
                   )    
                }))}   
            </div>
        )
    }
}

export default Breakdown;