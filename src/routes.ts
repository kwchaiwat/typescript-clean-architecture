import { Express } from 'express';
import { CreateSample } from './domain/use-cases/sample/create-sample';
import sampleRoutes from './routes/sampleRoutes';

// Function to set up routes for the application
export function setupRoutes(app: Express, createSampleUseCase: CreateSample): void {
  // Add more routes as needed
  app.use('/', (req, res) => {
    return res.send('Hello, World!');
  })

  // Use the routes from the sampleRoutes file
  app.use('/api', sampleRoutes(createSampleUseCase));

}
