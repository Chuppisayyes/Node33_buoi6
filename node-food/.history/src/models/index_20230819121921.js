import {Sequelize} from 'sequelize';
import config from '../';


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