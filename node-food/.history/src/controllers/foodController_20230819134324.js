import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';
let model = initModels(sequelize);
const addLikeRes = (req, res) => {
    
    res.send("Danh sách food");
}

const addRateRes = (req, res) => {
    res.send("");
}


export {}