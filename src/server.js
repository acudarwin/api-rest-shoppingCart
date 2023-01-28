const app = require('./app');

//mongo db connect
const mongoose = require('mongoose');

mongoose.set('strictQuery', false)
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Conectado a MongoDB');
}).catch(err => console.log(err));

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});