# AeroStay

AeroStay is a full-stack web application for listing, discovering, and reviewing unique accommodations. Inspired by platforms like Airbnb, AeroStay allows users to browse property listings, sign up, log in, post reviews, and manage their own listings.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Deployment](#deployment)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- User authentication (sign up, log in, log out)
- Create, edit, and delete property listings
- Upload images for listings
- Search and browse listings
- Post and manage reviews for listings
- Responsive UI with EJS templates
- Error handling and flash messaging
- Cloud storage integration for uploads

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS, HTML, CSS, JavaScript
- **Database:** MongoDB (via Mongoose)
- **Authentication:** Express-session, Passport.js (or similar)
- **File Uploads:** Multer, Cloudinary (or similar, see `cloudConfig.js`)
- **Other:** dotenv, custom middleware, utility modules

---

## Project Structure

```
AeroStay/
  app.js                # Main application entry point
  cloudConfig.js        # Cloud storage configuration
  controllers/          # Route handler logic (listings, reviews, users)
  init/                 # Database seeding and initialization scripts
  middleware.js         # Custom Express middleware
  models/               # Mongoose models (listing, review, user)
  public/               # Static assets (CSS, JS)
  routes/               # Express route definitions
  schema.js             # Database schema/validation
  uploads/              # Uploaded files (images, etc.)
  utils/                # Utility modules (error handling, async wrappers)
  views/                # EJS templates (layouts, partials, pages)
  README.md             # Project documentation
  package.json          # Project metadata and dependencies
```

---

## Setup & Installation

### Prerequisites

- Node.js (v14+ recommended)
- npm (comes with Node.js)
- MongoDB (local or Atlas)
- Cloudinary account (or update `cloudConfig.js` for your provider)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/AeroStay.git
   cd AeroStay
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following (example):
     ```
     DATABASE_URL=mongodb://localhost:27017/aerostay
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_API_KEY=your_api_key
     CLOUDINARY_API_SECRET=your_api_secret
     SESSION_SECRET=your_session_secret
     ```

4. **(Optional) Seed the database:**
   ```bash
   node init/data.js
   ```

5. **Start the application:**
   ```bash
   npm start
   ```
   The app will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Usage

- Visit the home page to browse listings.
- Sign up or log in to create and manage your own listings.
- Upload images and add details to your listings.
- View listing details and post reviews.
- Edit or delete your own listings and reviews.

---

## Deployment

The application is live at: [https://aerostay.onrender.com](https://aerostay.onrender.com)

---

## Scripts

- `npm start` — Start the server
- `npm run dev` — Start the server with nodemon (if configured)
- `node init/data.js` — Seed the database with sample data

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for new features, bug fixes, or improvements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or support, please open an issue or contact [anishghanwat.work@gmail.com](mailto:anishghanwat.work@gmail.com).
