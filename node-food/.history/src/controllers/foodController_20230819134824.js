import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';
let model = initModels(sequelize);
// API để thực hiện lượt thích
const LikeRes = async (req, res) => {
    const { user_id, res_id } = req.body;

    try {
        // Kiểm tra xem lượt thích đã tồn tại chưa
        const existingLike = await model.like_res.findOne({
            where: {
                user_id,
                res_id
            }
        });
        if (existingLike) {
            res.status(400).json({ message: 'Nguời dùng đã thích' });
        } else {
            // Tạo một lượt thích mới
            await model.like_res.create({
                user_id,
                res_id
            });
            res.status(200).json({ message: 'Đã thích thaành conông!' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
}
// API để bỏ lượt thích
const unlikeRes = async (req, res) => {
    res.send("");
}


export { LikeRes, unlikeRes };