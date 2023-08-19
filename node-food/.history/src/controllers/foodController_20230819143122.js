import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';
let model = initModels(sequelize);
// API để thực hiện lượt thích
const likeRes = async (req, res) => {
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
            res.status(400).send('Nguời dùng đã thích');
        } else {
            // Tạo một lượt thích mới
            await model.like_res.create({
                user_id,
                res_id
            });
            res.status(200).send('Đã thích thành công!');
        }
    } catch (error) {
        console.log(error); 
        res.status(500).json({ message: 'Bất ổn gòi Đại Vương (BE Code Bưởi)' });
    }
}
// API để bỏ lượt thích
const unlikeRes = async (req, res) => {
    const { user_id, res_id } = req.body;
    try {
        // Xóa lượt thích nếu tồn tại
        const deleted = await model.like_res.destroy({
            where: {
                user_id,
                res_id
            }
        });
        if (deleted) {
            res.status(200).json({ message: 'Bỏ thích thành công!' });
        } else {
            res.status(400).json({ message: 'Người dùng chưa nhấn thích nhà hàng này' });
        }
    } catch (error) {
        console.log(error); 
        res.status(500).json({ message: 'Bất ổn gòi Đại Vương (BE Code Bưởi)' });
    }
}


export { likeRes, unlikeRes };