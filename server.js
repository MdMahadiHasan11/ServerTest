const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get((err,req,res,next) => { res.status(404).json({ message: 'Not Found' }); });
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello From Express' });
  });
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  app.listen(PORT,()=>{
    console.log(`Server is running on port AT http://localhost:${PORT}`);
});