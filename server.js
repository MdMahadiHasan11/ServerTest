const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });
app.listen(PORT,()=>{
    console.log(`Server is running on port AT http://localhost:${PORT}`);
});