// app.ts

import express, { Express } from 'express';
import { initializeDependencies } from './initialize-dependencies';
import { setupRoutes } from './routes';
import { startServer } from './server';

// Function to initialize and configure the Express application
function initializeApp(): Express {
  const app = express();

  // Add any middleware, configuration, and routes here
  app.use(express.json()); // Middleware to parse JSON in the request body

  return app;
}

// Main function to run the application
function main() {
  const port = 3000; // Change this to your desired port
  const app = initializeApp();

  // Set up routes
  const createSampleUseCase = initializeDependencies.initializeDependenciesSample();
  setupRoutes(app, createSampleUseCase);

  // Start the server
  startServer(app, port);
}

// Run the application
main();
