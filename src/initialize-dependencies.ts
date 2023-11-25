import { MySQLSampleDataSource } from './data/data-sources/mysql/mysql-sample.data-source';
import { SampleRepositoryImpl } from './domain/repositories/sample.repository';
import { CreateSample } from './domain/use-cases/sample/create-sample';
import { SampleDataSource } from './data/interfaces/sample.data-source';
import mysqlConfig from './config/mysql-config';

function initializeDependenciesSample(): CreateSample {
  const mySQLSampleDataSource: SampleDataSource = new MySQLSampleDataSource(mysqlConfig);
  const sampleRepository = new SampleRepositoryImpl(mySQLSampleDataSource);
  return new CreateSample(sampleRepository);
}

export const initializeDependencies = {
  initializeDependenciesSample
}