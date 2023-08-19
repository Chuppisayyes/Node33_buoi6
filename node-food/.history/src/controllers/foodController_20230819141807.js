import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';
let model = initModels(sequelize);
// API để thực hiện lượt thích
const likeRes = async (req, res) => {
    const { user_id, res_id } = req.body;
    res.
       <!-- Button in the end -->
      <div class="input-group">
        <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
        <button type="button" class="btn btn-outline-secondary">Dropdown</button>
        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
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