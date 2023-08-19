import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';
let model = initModels(sequelize);
const getFood = (req, res) => {


    res.send("Danh sách food");

}

const findFood = (req, res) => {
    res.send("Tìm food");
}


export {}