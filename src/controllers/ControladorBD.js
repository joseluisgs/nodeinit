import db from '../database';

export default {
  async listarPersonas() {
    //  const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
    // eslint-disable-next-line no-unused-vars
    const [rows, fields] = await db.connection().execute('SELECT * FROM test');
    return rows;
  },
};
