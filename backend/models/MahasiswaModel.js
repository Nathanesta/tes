import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Mahasiswa = db.define('mahasiswa', {
    nama: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName:true
});

export default Mahasiswa;

(async()=>{
    await db.sync();
})();