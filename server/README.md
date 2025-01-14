
# Brain MRI Classification System

This project is a Brain MRI Classification System that includes a frontend built with React and a backend built with Node.js, Express, and MongoDB. The system allows doctors to upload brain MRI images and view the results of the classification.

## Table of Contents

- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/atuna26/brain-mri-classification-system
   cd brain-mri-classification-system
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a 

.env

 file in the root directory and add the following environment variables:
   ```
   MONGO_URL="your_mongo_url"
   JWT_SECRET="your_jwt_secret"
   PORT=3001
   ```

4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm start
   ```

## Usage

1. Register a new user by sending a POST request to `/auth/register` with the user's details.
2. Log in with the registered user by sending a POST request to `/auth/login`.
3. Upload brain MRI images by sending a POST request to `/uploadBrainMRI/:id` with the images.
4. View the uploaded brain MRI images and their classification results.

## API Endpoints

- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Log in with an existing user.
- `POST /uploadBrainMRI/:id`: Upload brain MRI images.
- `GET /brainMRIs`: Get all brain MRI records.
- `GET /brainMRI`: Get a specific brain MRI record by ID.
- `POST /sendToExpert`: Send a brain MRI record to an expert for review.
- `POST /writeExpertComment`: Write an expert comment on a brain MRI record.

## Environment Variables

- 

MONGO_URL: The MongoDB connection URL.
- 

JWT_SECRET: The secret key for JWT authentication.
- 

PORT: The port on which the backend server will run.

## Project Structure

```
.env
.gitignore
controllers/
    auth.js
    brainMRIs.js
    expert.js
index.js
middleware/
    auth.js
modules/
    BrainMRI.js
    User.js
package.json
README.md
routes/
    auth.js
```

## License

This project is licensed under the MIT License.
