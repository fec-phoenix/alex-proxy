const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use('/:propertyId', express.static(path.join(__dirname, '../public')));

app.get('/checkoutInformation/:propertyId', (req, res) => {
  axios.get(`http://3.16.113.225/checkoutInformation/${req.params.propertyId}/`)
    .then(checkoutInformation => res.send(checkoutInformation.data))
    .catch(err => res.send(err));
});

app.get('/details/:propertyId', (req, res) => {
  axios.get(`http://3.142.136.159/details/${req.params.propertyId}/`)
    .then(details => res.send(details.data))
    .catch(err => res.send(err));
});

app.get('/:listingID/reviews', (req, res) => {
  axios.get(`http://3.101.105.128:3006/${req.params.listingID}/reviews/`)
    .then(reviews => res.send(reviews.data))
    .catch(err => res.send(err));
});

app.get('/:propertyId/averageReviewsRating', (req, res) => {
  axios.get(`http://3.101.105.128:3006/${req.params.propertyId}/averageReviewsRating/`)
    .then(averageReviews => res.send(averageReviews.data))
    .catch(err => res.send(err));
});

app.get('/photos/:propertyID', (req, res) => {
  axios.get(`http://54.193.17.113:3002/photos/${req.params.propertyID}/`)
    .then(photos => res.send(photos.data))
    .catch(err => res.send(err));
});

app.get('/photos/:propertyID/primaryPhoto', (req, res) => {
  axios.get(`http://54.193.17.113:3002/photos/${req.params.propertyID}/primaryPhoto/`)
    .then(primaryPhoto => res.send(primaryPhoto.data))
    .catch(err => res.send(err))
})

app.listen(3000, () => 'successfully connected to the proxy server on port 3000');