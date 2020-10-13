import Migration from '../migrations';

class UserRankMigration extends Migration {
  createTable() {
    this.getDatabase().serialize(() => {
      this.getDatabase().run('CREATE TABLE user_rank('+
        'uuid INTEGER PRIMARY KEY,'+
        'name TEXT NOT NULL,'+
        'minimum_power TEXT NOT NULL'+
        ');');
    });
  }
}

export default UserRankMigration;
