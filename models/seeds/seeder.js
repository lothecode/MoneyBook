const mongoose = require('mongoose')
const Record = require('../record')

mongoose.connect('mongodb://localhost/expense', { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB的expense資料庫

// mongoose 連線後透過 mongoose.connection 拿到 Connection 的物件
const db = mongoose.connection
// 連線異常及成功
db.on('error', () => { console.log('mongodb error!') })
db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 1; i <= 3; i++) {
    Record.create({
      name: 'expense-' + i,
      date: '2020/03/1' + i,
      category: '休閒娛樂', // 這裡先固定
      amount: i * 100
    })
  }
  for (let j = 1; j <= 2; j++) {
    Record.create({
      name: 'expense-' + j,
      date: '2020/03/2' + j,
      category: '家居物業', // 這裡先固定
      amount: j * 50
    })
  }
  console.log('seeder done!')
})
