import mongoose from "mongoose";


mongoose.connect('mongodb+srv://upflow:102030md@upflow.awgtfke.mongodb.net/cidades-minas');

let db = mongoose.connection;

export default db;