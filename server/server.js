const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use('/:propertyId', express.static(path.join(__dirname, '../public')));

app.get('/checkoutInformation/:propertyId', (req, res) => {
  axios.get(`http://localhost:3004/checkoutInformation/${req.params.propertyId}/`)
    .then(checkoutInformation => res.send(checkoutInformation.data))
    .catch(err => res.send(err));
});

app.get('/details/:propertyId', (req, res) => {
  axios.get(`http://localhost:3003/details/${req.params.propertyId}/`)
    .then(details => res.send(details.data))
    .catch(err => res.send(err));
});

app.get('/:listingID/reviews', (req, res) => {
  axios.get(`http://localhost:3006/${req.params.listingID}/reviews`)
    .then(details => res.send(details.data))
    .catch(err => res.send(err));
});

app.get('/:propertyId/averageReviewsRating', (req, res) => {
  axios.get(`http://localhost:3006/${req.params.propertyId}/averageReviewsRating/`)
    .then(details => res.send(details.data))
    .catch(err => res.send(err));
});

app.listen(3000, () => 'successfully connected to the proxy server on port 3000');