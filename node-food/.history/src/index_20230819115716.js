import express from 'express';
const app = express();
//khởi tạo sever
app.listen(8080);
app.use(express.json()) // hàm gọi middleware chuyển đổi cấu trúc json để backend nhận được

app.use(express.static(".")) // hàm định vị đường dẫn để load tài nguyên trên source

import cors from 'cors';
app.use(cors()); // middleware chấp nhận tất FE truy cập vào

app.listen(8080); 


// localhost:8080/api/food/get-food
// localhost:8080/api/user/get-user
import rootRoutes from './Routes/rootRoutes.js';

app.use("/api",rootRoutes)

// yarn add swagger-ui-express  swagger-jsdoc
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc  from 'swagger-jsdoc';

const options = {
    definition: {
        info: {
            title: "api",
            version: "1.0.0"
        }
    },
    apis: ["src/swagger/index.js"]
}

const specs = swaggerJsDoc(options);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));


