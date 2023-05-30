# Instructions:

This project contains a client-server setup where the client is a React application and the server provides an API endpoint for retrieving templates.

Prerequisites
Make sure you have the following software installed on your machine:

Node.js
Visual Studio Code

# Getting Started

Open the clientServer folder in Visual Studio Code.

Install the required dependencies:

# Server application:

Open the terminal in Visual Studio Code.
Navigate to the server folder by running the command: cd server

Install the server dependencies by running: npm install.

Start the server:
While still in the server folder, run the command: npm run dev.
This will start the server using nodemon which automatically restarts the server when changes are made.

Access the server API:

Open your browser and navigate to: http://localhost:4500/api/templates.

You should see the JSON response containing the templates data.

# Client application:

Open a new terminal in Visual Studio Code.

Navigate to the client folder by running the command: cd client.

Start the client application by running: npm start.
This will launch the client application in your browser at: http://localhost:3000.

# Interact with the client application:

You can now interact with the client application, view the templates, and navigate between pages.
The client application will communicate with the server to fetch the templates data.
That's it! You have successfully set up the client-server environment and can now access the client application in your browser. Enjoy exploring the templates!
