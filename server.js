const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get((err,req,res,next) => { res.status(404).json({ message: 'Not Found' }); });
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello From Express' });
  });

  app.listen(PORT,()=>{
    console.log(`Server is running on port AT http://localhost:${PORT}`);
});