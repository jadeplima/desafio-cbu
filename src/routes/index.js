import express from "express"
import cidades from "./cidades.routes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({nome: "Cidade de Minas gerais"})
  })

  
  app.use(
    express.json(),
    cidades
  )
}

export default routes