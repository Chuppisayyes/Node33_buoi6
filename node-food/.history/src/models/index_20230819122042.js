import {Sequelize} from 'sequelize';
import config from '../config/config.js';
const sequelize = new Sequelize(
    config.db_database,
    config.db_user,
    config.db_pass,
    {
        host: config.db_host,
        port: config.db_port,
        dialect: config.db_dialect
    }
)

export default sequelize;
