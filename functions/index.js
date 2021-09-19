const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const { request, response } = require("express");
const stripe = require('stripe')('sk_test_51JZtqlSJn2iS15DsY3jvmQgnvQuuyIODNyFs19QUGVCpcxAn7yQk0T4wtSmwjKL0adBg732DLU8MWvtLQ7m81rem009Oe7PBu2')

// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/',(request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total

    console.log("Payment request recieved for this",total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr"
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// Listen commands
exports.api = functions.https.onRequest(app)

// API Endpoint
// http://localhost:5001/clone-26e1c/us-central1/api


