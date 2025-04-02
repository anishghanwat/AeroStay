const Listing = require('../models/listing');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAPBOX_ACCESS_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    const allListing = await Listing.find({});
    res.render('listings/listings.ejs', { allListing });
};

module.exports.renderNewForm = (req, res) => {
    res.render('listings/new.ejs');
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: 'reviews', populate: { path: 'author' } }).populate('owner');
    if (!listing) {
        req.flash('error', 'Cannot find the listing!');
        return res.redirect('/listings');
    }
    res.render('listings/show.ejs', { listing, mapToken: process.env.MAPBOX_ACCESS_TOKEN });
};

module.exports.createListing = async (req, res) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    })
        .send();

    // let { title, description, image, price, location, country } = req.body;
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    newListing.geometry = response.body.features[0].geometry;

    let savedListing = await newListing.save();
    console.log(savedListing);

    req.flash('success', 'Successfully created a new listing!');
    res.redirect('/listings');
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash('error', 'Cannot find the listing!');
        return res.redirect('/listings');
    }

    let originalListing = listing.image.url;
    originalListing = originalListing.replace('/upload', '/upload/h_300,w_250');

    // console.log('Original Image URL:', originalListing);

    res.render('listings/edit.ejs', { listing, originalListing });
};

module.exports.updateListing = async (req, res) => {
    // if (!req.body.listing) {
    //     throw new ExpressError(400, 'Send valid data for listing!');
    // }
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== 'undefined') {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash('success', 'Successfully updated the listing!');
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash('success', 'Successfully deleted the listing!');
    res.redirect('/listings');
};