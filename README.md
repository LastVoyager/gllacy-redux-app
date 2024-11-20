# gllacy-redux-app

## Project Setup and Running

This project is a JavaScript application that uses React, Redux and a backend server. Here are the steps to set up and run this project:

1. **Clone the repository**

   Use the following command to clone the repository:

   ```bash
   git clone https://github.com/LastVoyager/gllacy-app.git
   ```

2. **Navigate to the project directory**

   After cloning, navigate to the project directory with:

   ```bash
   cd gllacy-app
   ```

3. **Install dependencies**

   This project uses npm for dependency management. Install the dependencies with:

   ```bash
   npm install
   ```

4. **Set up environment variables**

   This project uses environment variables for configuration. You need to create a `.env` file in the root of your project and add the following:

   ```bash
   REACT_APP_SERVER_URL=http://localhost:4000
   ```

5. **Start the backend server**

   Navigate to the backend directory and start the server:

   ```bash
   cd backend
   npm start
   ```

   The server will start and by default can be accessed at `http://localhost:4000`.

6. **Start the frontend application**

   Navigate back to the root directory and start the application:

   ```bash
   cd ..
   npm start
   ```

   The application will start and by default can be accessed at `http://localhost:3000`.

Please note that these instructions assume that you have Node.js and npm installed on your machine. If not, you can download and install them from the [official Node.js website](https://nodejs.org/).
