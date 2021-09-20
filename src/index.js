const express = require('express');
const cors = require('cors');

const middleware = require('./middleware');
const router = require('./routes.js');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(middleware.decodeToken);
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});