const Sequelize = require("sequelize");
const transaction = require("../models").transaction;
module.exports = {
  create(req, res) {
    return transaction
      .create({
        description: req.body.description,
        amount: req.body.amount,
      })
      .then((transaction) => res.status(200).send(transaction))
      .catch((error) => res.status(400).send(error));
  },

  list(_, res) {
    return transaction
      .findAll({})
      .then((transaction) => res.status(200).send(transaction))
      .catch((error) => res.status(400).send(error));
  },

  find(req, res) {
    return transaction
      .findByPk(req.params.id)
      .then((transaction) => res.status(200).send(transaction))
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return transaction
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(
        res
          .status(200)
          .send({ message: "La transacción ha sido eliminada con exito" })
      )
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return transaction
      .update(
        {
          description: req.body.description,
          amount: req.body.amount,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then((num) => {
        if (num == 1) {
          res.status(200).send({
            message: "Transaccion Actualizada con exito",
          });
        } else {
          res.send({
            message: `Transaccion con  id=${id}. no se pudo actualizar!`,
          });
        }
      })
      .catch((error) => {
        res.status(500).send({
          message: "Error al actualizar la transaccion con id=" + id,
          error: error,
        });
      });
  },
};
