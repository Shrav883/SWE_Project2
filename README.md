# SWE_Project2
# Project Name: SWE_Project2

## Description

This project consists of an e-commerce application with a backend and a user frontend.

* The backend is located in this repository: [https://github.com/Shrav883/SWE_Project2.git](https://github.com/Shrav883/SWE_Project2.git)
* The user frontend is located in this repository: [https://github.com/Shrav883/SWEecommerceapp.git](https://github.com/Shrav883/SWEecommerceapp.git)

## Features

* **Backend:** Handles data management, business logic, and API endpoints.
* **Frontend:** Provides the user interface for interacting with the e-commerce application. This includes features for browsing movies, selecting seats, and managing a shopping cart.

## Technical Details (Based on provided code snippet)

The provided code snippet (`Selectseat.jsx`) suggests the following features are present in the frontend:

* **Seat Selection:** Users can select seats for a movie.
* **Seat Type Selection:** Users can choose between adult and child tickets.
* **Booking Summary:** Displays selected seats, ticket types, and total cost.
* **Cart Integration:** The application integrates with a shopping cart (likely managed by the backend) to store selected tickets.
* **Movie Details:** The application displays movie names.
* **Dynamic Pricing**: Ticket prices vary based on ticket type.

## How to Get Started

1.  **Backend:**
    * Clone the backend repository: [https://github.com/Shrav883/SWE_Project2.git](https://github.com/Shrav883/SWE_Project2.git)
    * Follow the instructions in the backend repository's README for setup and installation. This will likely involve setting up a database and running the backend server.

2.  **Frontend:**
    * Clone the frontend repository: [https://github.com/Shrav883/SWEecommerceapp.git](https://github.com/Shrav883/SWEecommerceapp.git)
    * Follow the instructions in the frontend repository's README for setup and installation. This will likely involve installing dependencies and configuring the application to connect to the backend API.

## Dependencies

* The frontend uses React.js. Based on the code, it also uses:
    * `react-router-dom`: For navigation.
    * `react-toastify`: For displaying notifications.
    * Potentially a state management solution like React Context (from `ShopContext`).

## Additional Notes

* The frontend code assumes that movie data is available via a context or API.
* The `SelectSeat` component handles the seat selection logic, calculates the price, and adds the selected seats to the cart.
* The application uses a currency symbol.

