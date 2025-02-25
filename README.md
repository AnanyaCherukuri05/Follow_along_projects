# E-Commerce Application - Milestone Breakdown

## Milestone 1: Project Overview

This project involves the development of a full-stack e-commerce application with a structured frontend and backend:

- **Frontend:** Handles user interface and experience.
- **Backend:** Manages business logic, database operations, and API integrations.

## Milestone 2: Login Page (React & CSS)

### Project Overview

Developed a modern, responsive login page using React.js and CSS with the following features:

- Email and Password fields
- "Remember Me" checkbox
- "Forgot Password?" link
- Submit button & Sign-up option
- Icons for email input and password visibility toggle

### Technologies Used

- **React.js** - Component-based UI development
- **CSS** - Styling for layout and responsiveness
- **React Icons** - Used for email input and password visibility toggle

## Milestone 3: Backend Setup

### Project Overview

Set up the backend infrastructure, including folder structuring, server configuration, database integration, and error handling.

### Key Achievements

#### Backend Folder Structure

```
backend/
├── controllers/   # Handles API logic  
├── models/        # Defines database schemas  
├── routes/        # Manages API endpoints  
├── middleware/    # Custom middlewares (error handling, authentication, etc.)  
├── config/        # Database connection setup  
├── server.js      # Main server file  
```

#### Server Setup

- Implemented Express.js for backend API handling.
- Used dotenv to manage environment variables.
- Configured server to run on PORT 5000 (or from .env).

#### Database Integration

- Connected backend to MongoDB Atlas using Mongoose.
- Created models for Products, Users, and Orders.

#### Error Handling

- Implemented middleware for structured error responses.
- Improved debugging with meaningful error messages.

### Technologies Used

- **Node.js & Express.js** - Backend framework
- **MongoDB Atlas & Mongoose** - Database management
- **dotenv** - Environment variable management
- **CORS & Body-Parser** - Middleware for API requests

## Milestone 4: User Model, Controller & File Uploads

### Project Overview

- Defined User Model for MongoDB.
- Implemented User Controller for API logic.
- Integrated Multer for image/file uploads.

### Key Achievements

#### User Model (User.js)

Defined user schema with fields:

- Name, Email, Password (bcrypt-encrypted), Role (Admin/User), ProfileImage

#### User Controller

- Created API endpoints for user-related operations.

#### File Upload (Multer)

- Configured file upload support for user profile images and product images.

## Milestone 5: Sign-Up Page & Form Validation

### Project Overview

Developed a Sign-Up Page with form validation to ensure correct data entry.

### Key Achievements

#### Form Fields

- **Name:** Required
- **Email:** Valid email format check
- **Password:** Minimum 8 characters, one uppercase letter, one number
- Real-time validation feedback

### Technologies Used

- **React.js** - Frontend development
- **CSS** - Form styling
- **JavaScript (ES6)** - Form validation logic

## Milestone 6: Secure User Signup & Password Encryption

### Project Overview

Implemented secure user signup with encrypted password storage.

### Key Achievements

#### Signup API Endpoint (/api/auth/signup)

- Accepts Name, Email, Encrypted Password, User Role (Default: User)
- Validates user input before storing.

#### Password Encryption

- Used bcryptjs for hashing passwords.

#### Database Storage

- Stored user data securely in MongoDB.

#### API Testing

- Verified user signup via Postman.

### Technologies Used

- **Node.js & Express.js**
- **MongoDB Atlas & Mongoose**
- **bcryptjs** - Secure password hashing
- **dotenv** - Environment variables
- **Postman** - API testing

## Milestone 7: Backend Endpoint for User Login

### Project Overview

Implemented backend authentication for user login.

### Process

1. User submits email & password.
2. Backend retrieves user details.
3. Password verification using bcrypt.
4. Successful login or error message.

### Security Measures

- Password encryption using bcrypt.
- Prevents password theft & enhances privacy.
- Meets security compliance (GDPR, PCI-DSS).

## Milestone 8: Product Card Components

### Project Overview

Developed a reusable product card component for displaying products.

### Key Achievements

- **Reusable Card Component:** Displays name, price, image, and description.
- **Dynamic Rendering:** Used .map() to iterate over product data.
- **Consistent Layout:** Ensured uniform styling across all cards.

### Technologies Used

- **React.js**
- **CSS**

## Milestone 9: Product Input Form & Image Upload

### Project Overview

Developed a product input form with multiple image upload functionality.

### Features

- **Form Validation**
- **Multiple Image Uploads**
- **Real-time Image Previews**

## Milestone 10: Product Schema & API Endpoint

### Project Overview

Defined Product Schema using Mongoose and implemented a POST API endpoint.

### Key Achievements

#### Product Schema (Mongoose)

```javascript
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  images: { type: [String], required: true },
  email: {
      type: String,
      required: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  }
}, { timestamps: true });
```

#### API Endpoint (/api/products)

- Validates and stores product details in MongoDB.
- Ensures data integrity & validation.

### Technologies Used

- **Node.js & Express.js**
- **MongoDB Atlas & Mongoose**
- **Multer** (for file uploads)

## Milestone 11: Fetching Product Data from Backend

### Project Overview

Created an API endpoint to retrieve product data from MongoDB and display it dynamically on the frontend using the Product Card Component.

### Key Achievements

- **API Endpoint:** Fetches all product data from MongoDB.
- **Frontend Integration:** Implemented a function to retrieve and display product data.
- **Dynamic Rendering:** Used Product Card Component for real-time product updates.

### Technologies Used

- **Node.js & Express.js**
- **MongoDB & Mongoose**
- **React.js**

## Milestone 12: Filtering Products by User Email

### Project Overview

Created an API endpoint to retrieve product data filtered by user email, ensuring users see only their uploaded products.

### Key Achievements

- **Filtered API Endpoint:** Retrieves products associated with a specific user.
- **Frontend Integration:** Dynamically displays filtered products.
- **Improved User Experience:** Personalized product display.

### Future Enhancements

- Implement authentication to auto-fetch the logged-in user's products.
- Add pagination for large product lists.
- Introduce sorting and filtering options (e.g., price, category).

