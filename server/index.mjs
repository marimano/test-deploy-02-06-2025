import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';
import url from 'url';
import mongoose from 'mongoose';
import Todo from './Todo.mjs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoUrl);

mongoose.connection.on('open', () => {
  console.log('Mongo DB is connected'); 
});

mongoose.connection.on('error', () => {
  console.log('Mongo DB is failed to connect');
});

const app = fastify();

app.register(fastifyStatic, {
  root: path.join(__dirname, '../client')
});

app.get('/api/user', (req, res) => {
  res.send({ id: 'fyt4v7s2j7fh', name: 'John Doe', age: 30, role: 'admin' });
});

app.get('/api/todo-list', (req, res) => {
  return Todo.find()
    .then(data => {
      return res.send(data);
    });
});

app.post('/api/todo', (req, res) => {
  const { text, isDone } = req.body;
  console.log('new todo:', text, isDone);

  const todo = new Todo({
    text,
    isDone
  });

  return todo.save()
    .then(newTodo => {
      console.log('new todo is created', newTodo);
      return res.send(newTodo);
    })
    .catch(() => {
      console.log('new todo is failed to create');
    });
});

const port = process.env.PORT || 5555;
const host = process.env.HOST || 'localhost';

app.listen({ port, host })
  .then(() => {
    console.log('Server started at ' + host + ':' + port);
  })
  .catch((error) => {
    console.log('Server failed to start', error);
  });