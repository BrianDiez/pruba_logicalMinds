const express = require('express');
const knex = require('knex')(require('./knexfile').development);
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// GET  users
app.get('/users', async (req, res) => {
  const users = await knex('users').select();
  res.json(users);
});

// POST users
app.post('/users', async (req, res) => {
  const { first_name, last_name, email, country } = req.body;

  if (!first_name || !last_name || !email || !country)
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });

  const exists = await knex('users').where({ email }).first();
  if (exists)
    return res.status(409).json({ error: 'El email ya está registrado' });

  const [newUser] = await knex('users')
    .insert({ first_name, last_name, email, country })
    .returning('*');

  res.status(201).json(newUser);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(` http://localhost:${PORT}`));


//Delete user
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await knex('users').where({ id }).del();

    if (deleted) {
      res.status(200).json({ message: 'Usuario eliminado' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});