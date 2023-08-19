import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';
let model = initModels(sequelize);
const getLikeRes = (req, res) => {
    res.send("Danh sách food");

}

const getRateRes = (req, res) => {
    res.send("");
}


export {}