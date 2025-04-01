const express = require('express');
const router = express.Router({ mergeParams: true });
const Listing = require('../models/listing');
const Review = require('../models/review');
const wrapAsync = require('../utils/wrapAsync');
const ExpressError = require('../utils/ExpressError');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
const reviewController = require('../controllers/reviews');

//review post route
router.post('/', isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//review delete route
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports = router;