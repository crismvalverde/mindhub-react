const express = require('express');
const router = express.Router();
const jwt = require = ('jsonwebtoken');
const usuarioModel = require('../models/usuarioModel')

router.post('/auth/login', (req, res) =>
  usuarioModel.findOne({ userName: req.body.userName })
    .then(user => {
      if (!user) {
        return res.send({ message: "user no existe" })
      }
      if (user.password == req.body.password) {
        const payload = {
          id: user_id,
          userName: user.userName
        }
        const options = { expiresIn: 604800 }

        jwt.sign(
          payload,
          options,
          key.secretOrKey,
          (err, token) => {
            if (err) {
              res.json({
                success: false,
                token: "Hubo un error"
              })
            } else {
              res.json({
                success: false,
                token: token
              })
            }
          }
        )
      } else {
        res.json({ message: "la contraseña es incorrecta" })
      }
    }
    )
)