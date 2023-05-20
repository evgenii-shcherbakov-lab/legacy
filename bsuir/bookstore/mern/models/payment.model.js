import mongoose from 'mongoose'

export default mongoose.model(
  'Payment',
  new mongoose.Schema({
    name: { type: String, required: true, unique: true, index: true },
  })
)
