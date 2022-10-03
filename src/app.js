import express from "express";
import db from "./config/dbConnect.js";
import cidades from "./models/cidade.js"
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("Open", () => {
  console.log("Conexao com o banco feita com sucesso")
})

const app = express();
app.use(express.json())
routes(app);


export default app