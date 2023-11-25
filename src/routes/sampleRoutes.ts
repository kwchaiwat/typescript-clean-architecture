import { Router, Request, Response } from 'express';
import { CreateSample } from '../domain/use-cases/sample/create-sample';
import { SampleRequest } from '../domain/models/sample.model';

const router = Router();

export default function (createSampleUseCase: CreateSample) {
  // Route for creating a sample
  router.post('/samples', async (req: Request, res: Response) => {
    try {
      const sampleData: SampleRequest = req.body;
      await createSampleUseCase.execute(sampleData);
      res.status(201).send('Sample created successfully');
    } catch (error) {
      console.error('Error creating sample:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  // Add more routes as needed

  return router;
};
