const express = require('express');
const bodyParser = require('body-parser');
const LoginUseCase = require('./use-cases/login');
const OrdersUseCase = require('./use-cases/orders');
const DetailUseCase = require('./use-cases/detail');
const { jwtValidationMiddleware } = require('./infrastructure/jwt-validation');

// infrastructure
const app = express();

app.use(bodyParser.json());
app.use(jwtValidationMiddleware);

// usecases
app.post('/login', LoginUseCase);
app.get('/orders', OrdersUseCase);
app.get('/order/detail/:uuid', DetailUseCase);
app.post('/login', LoginUseCase);

app.listen(8080, '127.0.0.1', () => {
  console.log('Example app listening on http://127.0.0.1:8080!');
});
