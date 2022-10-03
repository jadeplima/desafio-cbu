import express from "express"
import cidades from "../models/cidade.js"


class CidadeController {

  static ListarCidade = (req,res) => {
    cidades.find((err, cidades) => {
      res.status(200).json(cidades)
    })

  }

  static criarCidade = (req, res) => {
    let cidade = new cidades(req.body);
    
    cidade.save((err) => {
      if(err) {
        res.status(500).send({messege: `${err.messege} - Falha ao criar cidade`})
      } else {
        res.status(201).send(cidade.toJSON())
      }
    })
  }

  static atualizarCidade = (req, res) => {
    const id = req.params.id

    cidades.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err ) {
        res.status(200).send({messege: 'Cidade Atualizada com sucesso'})
      } else {
        res.status(500).send({messege: err.messege})
      }
    })
  }

  static listarCidadePorId = (req, res) => {
    const id = req.params.id;

    cidades.findById(id, (err, cidades) => {
      if(err) {
        res.status(400).send({messege: `${err.messege} - Id da cidade não localizado`})
      } else {
        res.status(200).send(cidades);
      }
    })
  }

  static excluirCidade = (req, res) => {
    const id = req.params.id;

    cidades.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({messege: 'Cidade removida'})
      } else {
        res.status(500).send({message: err.messege})
      }
    })
  }

  static listarCidadePorSigla = (req, res) => {
    const sigla = req.query.sigla

    cidades.find({'Sigla': sigla}, {}, (err, cidades) => {
      res.status(200).send(cidades)
    })
  }

}

export default CidadeController