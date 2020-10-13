import sqlite3 from 'sqlite3';
import { DATABASE_DIRECTORY } from '../utils/constants';

class Migration {
  #database: sqlite3.Database;

  protected getDatabase(): sqlite3.Database {
    this.#database = new sqlite3.Database(DATABASE_DIRECTORY);
    return this.#database;
  }

  protected closeDatabase(): void {
    this.#database.close();
  }
}

export default Migration;
