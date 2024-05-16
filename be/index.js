const express = require('express')
const mongoose = require('mongoose')
const cors= require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

const kittySchema = new mongoose.Schema({
    name: String,
    age:Number
  });
  const Kitten = mongoose.model('Kitten', kittySchema);
app.get('/products/',async function (req, res) {
    const getAllData=await Kitten.find()
  res.send( getAllData)
})
app.get('/products/:id',async function (req, res) {
    const {id}=req.params
    const getData=await Kitten.findById(id)
    res.send(getData)
  })
  app.post('/products/',async function (req, res) {
      const body=req.body
      const postData=new Kitten(body)
      await postData.save()

    res.send(postData)
  })
  app.put('/products/:id',async function (req, res) {
    const {id}=req.params
      const body=req.body
      const putData=await Kitten.findByIdAndUpdate(id ,body)
    res.send(putData)
  })
  app.delete('/products/:id',async function (req, res) {
      const {id}=req.params
      const deleteData=await Kitten.findByIdAndDelete(id)
    res.send(deleteData)
  })
mongoose.connect('mongodb+srv://meryem:meryem@cluster0.lbuxvjt.mongodb.net/')
  .then(() => console.log('Connected!'));

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })