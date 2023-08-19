import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';
import { Sequelize } from 'sequelize';

const Op = Sequelize.Op;

const model = initModels(sequelize);
// API để thực hiện lượt thích
const ikeRes = async (req, res) => {
    try {
      const { user_id, res_id, date_like } = req.body;
  
      let modelUpdate = {
        user_id,
        res_id,
        date_like,
      };
  
      await model.like_res.create(modelUpdate);
      res.send("Thành Công");
    } catch (error) {
      res.send("Lỗi BE");
    }
  };
// const likeRes = async (req, res) => {
//     let {user_id, res_id, date_like} = req.body;
//     res.send({user_id, res_id, date_like});
//     try {
//         // Kiểm tra xem lượt thích đã tồn tại chưa
//         let existingLike = await model.like_res.findAll({
//             where: {
//                 user_id,
//                 res_id
//             }
//         });
//         if (existingLike) {
//             res.status(400).json({ message: 'Nguời dùng đã thích' });
//         } else {
//             let newLike = {
//                 user_id,
//                 res_id,
//                 date_like,
//             };
//             // Tạo một lượt thích mới
//             await model.like_res.create(newLike);
//             res.status(200).json({ message: 'Đã thích thành công!' });
//         }
//     } catch (error) {
//         // res.send()
//         console.log(error); 
//         res.status(500).json({ message: 'Bất ổn gòi Đại Vương (BE Code Bưởi)' });
//     }
// }
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


export { likeRes, unlikeRes };