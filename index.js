import express from 'express'
import mongoose from 'mongoose'

const app = express()

// schemas for database

class Auction {
  constructor() {
    this.id = new Number()
    this.live = new Boolean()
    this.bids = new Array()
    this.seller = new Object()
    this.expiry = new Date()
    // info such as item, location, delivery, payment method, etc
    this.information = new Object()
  }
  getInfo() {
    // info such as highest bidder, time left until close etc
  }
  delete() {

  }
  update() {

  }
}

class User {
  constructor() {
    this.name = new String()
  }
  sendVerificationEmail() {

  }
}

// request handlers

const getLive = (req, res) => {
  // connect to mongoDB with mongoose 
  res.json({
    data: []
  })
}

const getLiveByUser = (req, res) => {
  const user = req.params.user
  // connect to mongoDB with mongoose 
  res.json({
    data: []
  })
}

const getFinished = (req, res) => {
  // connect to mongoDB with mongoose 
  res.json({
    data: []
  })
}

const getFinishedByUser = (req, res) => {
  const user = req.params.user
  // connect to mongoDB with mongoose 
  res.json({
    data: []
  })
}

const setBid = (req, res) => {
  const id = req.params.id
  // connect to mongoDB with mongoose 
}

const unsetBid = (req, res) => {
  const id = req.params.id
  // connect to mongoDB with mongoose 
}

const getDetails = (req, res) => {
  const id = req.params.id
  // connect to mongoDB with mongoose 
}

// API endpoints

app.get('/auction/finished', getFinished)

app.get('/auction/finished/:user', getFinishedByUser)

app.get('/auction/live', getLive)

app.get('/auction/live/:user', getLiveByUser)

app.get('/auction/:id/details', getDetails)

app.post('/auction/:id/set-bid', setBid)

app.post('/auction/:id/unset-bid', unsetBid)