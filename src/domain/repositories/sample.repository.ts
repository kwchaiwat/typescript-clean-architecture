import { SampleRepository } from "../interfaces/repositories/sample.repository";
import { SampleDataSource } from "../../data/interfaces/sample.data-source";
import { SampleRequest, SampleResponse } from "../models/sample.model";

export class SampleRepositoryImpl implements SampleRepository {
    sampleDataSource: SampleDataSource;

    constructor(sampleDataSource: SampleDataSource) {
        this.sampleDataSource = sampleDataSource;
    }
    
    find(query: object): Promise<SampleResponse[] | []> {
        return this.sampleDataSource.getAll(query);
    }

    findOne(id: string): Promise<SampleResponse | null> {
        return this.sampleDataSource.getOne(id);
    }

    create(data: SampleRequest): Promise<void> {
        return this.sampleDataSource.create(data);
    }

    update(id: string, data: SampleRequest): Promise<void> {
        return this.sampleDataSource.update(id, data);
    }

    delete(id: string): Promise<void> {
        return this.sampleDataSource.delete(id);
    }
}
