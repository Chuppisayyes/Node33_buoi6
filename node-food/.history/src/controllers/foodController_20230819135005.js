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
            res.status(200).json({ message: 'Đã thích thành công!' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Bất ổn gòi Đại Vương (BE Code Bưởi)' });
    }
}
// API để bỏ lượt thích
const unlikeRes = async (req, res) => {
    const { user_id, restaurant_id } = req.body;
    try {
        // Xóa lượt thích nếu tồn tại
        const deleted = await model.Like.destroy({
            where: {
                user_id,
                restaurant_id
            }
        });

        if (deleted) {
            res.status(200).json({ message: 'Unliked successfully' });
        } else {
            res.status(400).json({ message: 'User did not like this restaurant' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
}


export { LikeRes, unlikeRes };