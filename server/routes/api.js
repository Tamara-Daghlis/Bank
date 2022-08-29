const express = require('express')
const router = express.Router()
const Transaction = require('../model/Transaction')

router.get('/transactions', async function (request, response) {
    const transaction = await Transaction.find({})
    response.send(transaction)
})

router.post('/transaction', async function (request, response) {
    const newTransaction = new Transaction({
        'amount': request.body.amount,
        'category': request.body.category,
        'vendor': request.body.vendor
    })
    await newTransaction.save()
    response.send(newTransaction)
})

router.delete('/transaction/:id', async function (request, response) {
    const transactionId = request.params.id
    const deletedTransaction = await Transaction.findByIdAndDelete(transactionId)
    response.send(deletedTransaction)
})

module.exports = router