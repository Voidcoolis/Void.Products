# Void Products

A full-stack MERN application for managing products, built with React, Chakra UI, Zustand, Express, and MongoDB.

## Features

- View all products
- Create new products
- Edit existing products
- Delete products
- Responsive UI with Chakra UI
- State management with Zustand
- RESTful API with Express and MongoDB

## Project Structure

```
Void.Products/
├── void.products.backend/      # Express + MongoDB backend
├── void.products.frontend/     # React + Vite frontend
├── .env                        # Environment variables
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Backend Setup

1. Go to the backend folder:

   ```sh
   cd void.products.backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure environment variables in the root `.env` file:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

   Example:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/products?retryWrites=true&w=majority
   PORT=5000
   ```

4. Start the backend server (development):

   ```sh
   npm run dev
   ```

   For deployment or cross-platform environments, use:

   ```sh
   npx cross-env NODE_ENV=production node server.js
   ```

   The backend will run on [http://localhost:5000](http://localhost:5000).

### Frontend Setup

1. Go to the frontend folder:

   ```sh
   cd void.products.frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the frontend development server:

   ```sh
   npm run dev
   ```

   The frontend will run on [http://localhost:5173](http://localhost:5173) (or as specified by Vite).

### API Proxy

The frontend is configured to proxy `/api` requests to the backend server via Vite's proxy settings.

## Deployment

- Use `cross-env` to set environment variables for deployment across different platforms.
- Ensure your `.env` file is correctly set up in the root directory.
- Build the frontend with:

  ```sh
  npm run build
  ```

  and serve the static files as needed.

## Technologies Used

- **Frontend:** React, Chakra UI, Zustand, Vite
- **Backend:** Express, MongoDB, Mongoose
- **Other:** dotenv, cross-env, nodemon