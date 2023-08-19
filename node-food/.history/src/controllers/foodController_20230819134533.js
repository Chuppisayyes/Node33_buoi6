import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';
let model = initModels(sequelize);
// API để thực hiện lượt thích
const LikeRes = async (req, res) => {

    res.send("");
}
// API để bỏ lượt thích
const unlikeRes = async (req, res) => {
    res.send("");
}


export { LikeRes, unlikeRes };