/* Controllers */
const transactionController = require('../controllers/transaction');
module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   
   app.post('/api/transaction/create/', transactionController.create);
  //  app.post('/api/transaction/create/description/:description/amount/:amount', transactionController.create);
   app.get('/api/transaction/list', transactionController.list);

   app.put('/api/transaction/:id', transactionController.update);

   app.delete('/api/transaction/:id', transactionController.delete);

   app.get('/api/transaction/:id', transactionController.find);
  
};

