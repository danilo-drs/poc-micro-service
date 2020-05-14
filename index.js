const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const LoginUseCase = require('./use-cases/login');
const OrdersUseCase = require('./use-cases/orders');
const DetailUseCase = require('./use-cases/detail');
const { jwtValidationMiddleware } = require('./infrastructure/jwt-validation');

// infrastructure
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(jwtValidationMiddleware);

// usecases
app.get('/', (req, res) => res.send('no content here'));
app.post('/login', LoginUseCase);
app.get('/orders', OrdersUseCase);
app.get('/order/detail/:uuid', DetailUseCase);
app.post('/login', LoginUseCase);

app.listen(() => {
  console.log('Example app listening !');
});
