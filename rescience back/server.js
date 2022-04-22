const express = require('express');
const cors = require('cors');

const app = express();

const usersRoute = require('./src/routes/users.router');
const postsRoute = require('./src/routes/post.router');
const questionsRoute = require('./src/routes/question.router');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(usersRoute);
app.use(postsRoute);
app.use(questionsRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server has been started on', port);
});