const express = require('express')
const router = express.Router()
const Record = require('../models/record')

// sort by category
router.get('/:screen', (req, res) => {
  Record.find()
    .lean()
    .exec((err, records) => {
      if (err) return console.error(err)
      if (req.params.screen === 'all') {
        return res.redirect('/records')
      } else {
        const results = records.filter(item => {
          return item.category === req.params.screen
        })
        let total = 0
        results.forEach(item => {
          total += item.amount
        })
        return res.render('index', { records: results, total })
      }
    })
})
module.exports = router
