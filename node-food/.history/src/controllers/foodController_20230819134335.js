import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';
let model = initModels(sequelize);
const addLikeRes = async (req, res) => {

    res.send("Danh sách food");
}

const addRateRes = async (req, res) => {
    res.send("");
}


export {}