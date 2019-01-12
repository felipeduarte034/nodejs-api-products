const express = require('express');
const app = express();

app.use(express.json()); //*permite enviar dados para a aplicaçao em formato JSON
app.use('/api', require('./src/routes'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("----> SERVER INICIADO port : " + port);
});