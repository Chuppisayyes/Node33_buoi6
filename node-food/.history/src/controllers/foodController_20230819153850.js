import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';
import { Sequelize } from 'sequelize';

const Op = Sequelize.Op;

const model = initModels(sequelize);
// API để thực hiện lượt thích
const likeRes = async (req, res) => {
    let {user_id, res_id, date_like} = req.body;
    res.send({user_id, res_id, date_like});
    try {
        // Kiểm tra xem lượt thích đã tồn tại chưa
        let existingLike = await model.like_res.findAll({
            where: {
                user_id,
                res_id
            }
        });
        if (existingLike) {
            res.status(400).json({ message: 'Nguời dùng đã thích' });
        } else {
            let newLike = {
                user_id,
                res_id,
                date_like,
            };
            // Tạo một lượt thích mới
            await model.like_res.create(newLike);
            res.status(200).json({ message: 'Đã thích thành công!' });
        }
    } catch (error) {
        // res.send()
        console.log(error); 
        res.status(500).json({ message: 'Bất ổn gòi Đại Vương (BE Code Bưởi)' });
    }
}
// API để bỏ lượt thích
const unlikeRes = async (req, res) => {
    let { user_id, res_id  } = req.body;
    try {
        // Xóa lượt thích nếu tồn tại
        let deleted = await model.like_res.destroy({
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
// API để lấy danh sách like theo nhà hàng và user
const getLikeRes = async (req, res) => {
    const { user_id, res_id } = req.query;
    
    try {
        const likes = await model.like_res.findAll({
            where: {
                user_id,
                res_id
            }
        });
        res.status(200).json(likes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
};

// API để lấy danh sách đánh giá theo nhà hàng và user
const getRateResUser = async (req, res) => {
    const { user_id, res_id } = req.query;
    
    try {
        const ratings = await model.rating_res.findAll({
            where: {
                user_id,
                res_id
            }
        });
        res.status(200).json(ratings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
};

// API để thực hiện đánh giá
const rateRes = async (req, res) => {
    const { user_id, res_id, amount, date_rate } = req.body;

    try {
        const newRating = {
            user_id,
            res_id,
            amount
            rating_value
        };
        
        await model.rating_res.create(newRating);
        res.status(200).json({ message: 'Rating successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
};

// API để thực hiện đặt hàng
const userOrder = async (req, res) => {
    const { user_id, res_id, order_details } = req.body;

    try {
        const newOrder = {
            user_id,
            res_id,
            order_details
        };
        
        await model.user_order.create(newOrder);
        res.status(200).json({ message: 'Order successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
};


export { likeRes, unlikeRes, getLikeRes , getRateResUser, rateRes, userOrder };