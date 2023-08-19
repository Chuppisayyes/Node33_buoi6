import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';
let model = initModels(sequelize);
// API để thực hiện lượt thích
const addLikeRes = async (req, res) => {

    res.send("Danh sách food");
}
// API để bỏ lượt thích
const addRateRes = async (req, res) => {
    res.send("");
}


export {}