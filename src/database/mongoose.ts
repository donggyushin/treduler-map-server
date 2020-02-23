import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
mongoose.set('useCreateIndex', true)
const env = process.env.NODE_ENV

let endpoint = process.env.DB_END_POINT_PRODUCTION
// if (env === 'development') {
//     endpoint = process.env.DB_END_POINT
// }
console.log('endpoint: ', endpoint)
mongoose.connect(endpoint || '', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('db connection!'))