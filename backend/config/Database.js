import {Sequelize} from "sequelize";

const db = new Sequelize('kampus_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;