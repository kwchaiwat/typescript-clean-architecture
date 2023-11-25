
const host: string = process.env.DB_HOST || 'localhost';
const user: string = process.env.DB_USER || 'root';
const password: string = process.env.DB_PASSWORD || '';
const database: string = process.env.DB_DATABASE || '';
const connectionLimit: number = parseInt(process.env.DB_CONNECTION_LIMIT || '10', 10);

interface MySQLConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  connectionLimit: number;
}

const mysqlConfig: MySQLConfig = {
  host: host,
  user: user,
  password: password,
  database: database,
  connectionLimit: connectionLimit
};

export default mysqlConfig;
