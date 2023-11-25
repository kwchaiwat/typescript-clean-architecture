import { Express } from 'express';

// Function to start the server
export function startServer(app: Express, port: number): void {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
