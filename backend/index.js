const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const router = require('./routes/router');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const corsOptions = {
  origin: '*',
  credential: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use('/img', express.static(path.join(__dirname, './routes/img')));
app.use('/api', router);


const port = 4000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});