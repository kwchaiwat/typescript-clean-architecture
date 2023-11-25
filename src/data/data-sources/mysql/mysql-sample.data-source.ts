import mysql from 'mysql2/promise';
import { SampleRequest } from '../../../domain/models/sample.model';
import { SampleDataSource } from '../../interfaces/sample.data-source';

export class MySQLSampleDataSource implements SampleDataSource {
  private pool: mysql.Pool;

  constructor(dbConfig: mysql.PoolOptions) {
      this.pool = mysql.createPool(dbConfig);
  }

  async query(sql: string, values?: any): Promise<any> {
      const connection = await this.pool.getConnection();
      try {
          const [rows] = await connection.query(sql, values);
          return rows;
      } finally {
          connection.release();
      }
  }

  async getAll(query: object): Promise<any[]> {
      const rows = await this.query('SELECT * FROM samples WHERE ?', [query]);
      return rows;
  }

  async create(data: SampleRequest): Promise<void> {
      await this.query('INSERT INTO samples (title) VALUES (?)', [data.title]);
  }

  async delete(id: string): Promise<void> {
      await this.query('DELETE FROM samples WHERE id = ?', [id]);
  }

  async update(id: string, data: SampleRequest): Promise<void> {
      await this.query('UPDATE samples SET title = ? WHERE id = ?', [data.title, id]);
  }

  async getOne(id: string): Promise<any | null> {
      const rows = await this.query('SELECT * FROM samples WHERE id = ?', [id]);
      return rows.length > 0 ? rows[0] : null;
  }
}