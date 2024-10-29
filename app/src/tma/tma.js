import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const tmaName = process.env.TMA_NAME;
const tmaUser = process.env.TMA_USER;
const tmaHost = process.env.TMA_HOST;
const tmaPassword = process.env.TMA_PASSWORD;

const tma = new Sequelize(tmaName, tmaUser, tmaPassword, {
    dialect: "postgres",
    host: tmaHost,
    database: tmaName,
    user: tmaUser,
    password: tmaPassword,
    port: 5432,
    ssl: true,
    logging: false
});

export default tma;