const mongoose = require('mongoose');
const data = require('./data.js');
const Listing = require("../models/listing.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/AeroStay';

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB');
}

const initDB = async () => {
    await Listing.deleteMany({});

    // ✅ Keep `image` field structure correct
    const formattedData = data.data.map(listing => ({
        ...listing,
        image: {
            url: listing.image.url,
            filename: listing.image.filename
        }
    }));

    // ✅ Assign owner to all listings
    const updatedData = formattedData.map((obj) => ({
        ...obj,
        owner: '67e1bbead9f00fef8e429004'
    }));

    await Listing.insertMany(updatedData);
    console.log("Data was initialized");
};

initDB();
