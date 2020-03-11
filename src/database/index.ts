import { MikroORM, IDatabaseDriver, Connection } from 'mikro-orm';

class Database {
  database?: MikroORM<IDatabaseDriver<Connection>>;

  constructor() {
    MikroORM.init()
      .then(con => {
        this.database = con;
      });
  }


}

export default Database;
