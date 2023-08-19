import express from 'express';
const app = express();
//khởi tạo sever
app.use(express.json()) // hàm gọi middleware chuyển đổi cấu trúc json để backend nhận được

app.use(express.static(".")) // hàm định vị đường dẫn để load tài nguyên trên source

import cors from 'cors';
app.use(cors()); // middleware chấp nhận tất FE truy cập vào
app.listen(8080);


app.use("/api",rootRoutes);
