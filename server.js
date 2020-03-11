const express = require('express');

const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'administrator/build')));

app.get('/api/customers', (req, res, next) => {
   let customers = [
      {
         success: true,
         data: 'Hello'
      },
      {
         success: true,
         data: 'world'
      }
   ];
   res.json(customers);
});

const PORT = 5000;

app.listen(PORT, () => {
   console.log(`App listening on port ${PORT}!`);
});
