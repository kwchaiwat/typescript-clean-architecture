import { SampleRequest, SampleResponse } from "../../domain/models/sample.model";

export interface SampleDataSource {
    create(data: SampleRequest): Promise<void>;
    getAll(query: object): Promise<SampleResponse[]>;
    delete(id: string): Promise<void>;
    update(id: string, data: SampleRequest): Promise<void>;
    getOne(id: string): Promise<SampleResponse | null>;
}