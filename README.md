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


## Milestone 13: Filtering Products by User Email

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

## Milestone 14: Deleting Products by ID

### Project Overview

This milestone focuses on implementing a **delete functionality** for uploaded products. Users can now remove a product from the database by clicking a **Delete** button, which sends the product ID to the backend for deletion.

### Key Achievements

- **Delete API Endpoint:** Allows products to be deleted using their unique ID.
- **Frontend Integration:** Added a Delete button to product cards.
- **Improved User Experience:** Users can remove unwanted products easily.

### Future Enhancements

- Implement a confirmation prompt before deletion.
- Add authentication to ensure only the product owner can delete.
- Introduce a soft delete feature to allow recovery of deleted products.

## Milestone 15: Creating a Navbar Component

### Project Overview

This milestone focuses on creating a **Navbar component** and integrating it into all pages to ensure smooth navigation across the application.

### Key Achievements

- **Reusable Navbar Component:** A single component used across multiple pages.
- **Navigation Links:** Added links to Home, My Products, Add Product, and Cart.
- **Responsive Design:** Ensured the Navbar adapts to different screen sizes.
- **Improved User Experience:** Simplified navigation across the application.

### Future Enhancements

- Implement authentication-based navigation (e.g., hide/show links based on login status).
- Add dropdown menus for better organization.
- Enhance styling for a more user-friendly experience.

## Milestone 16: Creating a Product Info Page

### Project Overview

This milestone focuses on creating a **Product Info Page** that displays all product details and allows users to select a quantity and add the item to their cart.

### Key Achievements

- **Detailed Product Page:** Displays all relevant product information.
- **Quantity Selector:** Users can choose the quantity of the product they want to purchase.
- **Add to Cart Button:** Enables users to add selected products to their cart.
- **Improved Shopping Experience:** Provides a seamless way to view and purchase products.

### Future Enhancements

- Implement a dynamic cart system with real-time updates.
- Add product image carousel for better visualization.
- Introduce customer reviews and ratings on the product page.

## Milestone 17: Adding Cart Functionality

### Project Overview

This milestone focuses on implementing **cart functionality** by creating an endpoint to add products to the cart and store them in the database.

### Key Achievements

- **Updated User Schema:** Modified schema to store cart products.
- **Cart API Endpoint:** Created an endpoint to receive and store product details in the cart.
- **Database Integration:** Successfully saved cart data in MongoDB.
- **Enhanced Shopping Experience:** Allowed users to add items to their cart for later purchase.

### Future Enhancements

- Implement cart quantity updates and item removal.
- Add authentication to associate carts with specific users.
- Introduce a checkout process with payment integration.

## Milestone 18: Fetching Cart Data

### Project Overview

This milestone focuses on implementing a **backend endpoint** to fetch all products stored in a user's cart and display them on the cart page.

### Key Achievements

- **Cart API Endpoint:** Created an endpoint to retrieve all products inside a user's cart.
- **User-Based Filtering:** Implemented logic to fetch cart items based on user email.
- **Database Integration:** Successfully retrieved cart data from MongoDB.
- **Improved User Experience:** Allowed users to view their saved cart items.

### Future Enhancements

- Implement real-time cart updates with WebSockets.
- Add authentication to secure user-specific cart data.
- Enhance cart UI to allow quantity updates and removals directly from the cart page.

## Milestone 19: Cart Page UI & Quantity Management

### Project Overview

This milestone focuses on building the *cart page UI* and implementing functionality to increase or decrease product quantity within the cart.

### Key Achievements

- *Cart Page UI:* Designed and developed a frontend page to display cart products.
- *Quantity Control:* Added + and - buttons to adjust product quantity.
- *Backend Integration:* Created an API endpoint to update product quantity in the cart.
- *Improved User Experience:* Enabled users to manage their cart directly from the UI.

### Future Enhancements

- Implement a persistent cart across user sessions.
- Add a "Remove from Cart" button for individual products.
- Introduce stock validation to prevent over-purchasing.

## Milestone 20: Profile Page Implementation

### Project Overview

This milestone focuses on building the *profile page UI* and implementing a backend endpoint to fetch and display user data.

### Key Achievements

- *Profile Page UI:* Designed and developed a frontend profile page to display user details.
- *User Data Fetching:* Created an API endpoint to retrieve user data using email.
- *Displayed User Information:* Shown profile photo, name, and email in a dedicated section.
- *Address Management:* Displayed user addresses with an option to add a new address.
- *Improved User Experience:* Provided a structured view of user information and an intuitive way to manage addresses.

### Future Enhancements

- Implement authentication to secure user data.
- Allow users to edit their profile information.
- Enable multiple address management with default selection.


