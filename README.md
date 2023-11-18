# React Redux Cart Management with Redux Toolkit 

## Project Overview

This project is a React application created with **Vite**, featuring **React Redux** and **Redux Toolkit** to efficiently manage cart data. The application provides a seamless shopping experience by leveraging the power of Redux to handle the state of the shopping cart. With Redux Toolkit, the management of complex state logic is simplified, ensuring a smooth and maintainable cart management system.

## Table of Contents

- [Installation](#installation)
- [Environment Varibles](environment-varibles)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Features](#features)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-react-redux-cart-project.git
   ```
   
2. **Go to the project directory:**
    ```sh
    cd my-project
    ```
    
3. **Install dependencies**
    ```sh
    npm install
    ```
## Environment Varibles

To run this project, you will need to provide the following environment variables to your .env file

`YOUR_CART_API`

For this project i used firebase 

## Usage

**To start the development server and run the application, use the following command:** 

```sh
npm run dev
```
## Folder Structure

The project's folder structure focuses on cart management functionality. Key directories include:

- **src/components:** Contains React components related to products and cart display and interaction.
- **src/store:** Defines Redux slices and actions specific to cart management and UI slice for managing notifications.
- **src/app:** Configures the Redux store and sets up the root component.

## Features

- **Vite:** Utilizes Vite for fast and optimized development and production builds.
- **React Redux:** Efficiently manages cart state in React applications using React Redux.
- **Redux Toolkit:** Simplifies the process of writing Redux logic and reduces boilerplate code for cart-related actions and reducers.
- **Modular Components:** Organizes components for cart display and interaction, ensuring a clean and scalable structure.
- **Cart Management:** Implements features for adding, removing, and updating items in the shopping cart.
- **UI Updates:** Dynamically reflects changes in the cart state and shows diffierent notifications to provide a responsive and intuitive user interface.
