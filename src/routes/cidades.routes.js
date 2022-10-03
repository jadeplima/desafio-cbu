import express from 'express'
import CidadeController from '../controllers/cidadesController.js'

const router = express.Router();

router
  .get("/cidades", CidadeController.ListarCidade)
  .get("/cidades/busca", CidadeController.listarCidadePorSigla)
  .get("/cidades/:id", CidadeController.listarCidadePorId)
  .post("/cidades", CidadeController.criarCidade)
  .put("/cidades/:id", CidadeController.atualizarCidade)
  .delete("/cidades/:id", CidadeController.excluirCidade)


  export default router;