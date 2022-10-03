import mongoose from "mongoose"

const cidadeSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    sigla: {type: String, required: true}
  }
);

const cidades = mongoose.model('cidade', cidadeSchema);

export default cidades;

