const mongoose = require ("mongoose");
const uri = "mongodb://127.0.0.1:27017/Gatos";
mongoose 
.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })

// encontrar errores
.catch
(err => console.log(err));
const db = mongoose.connection;
db.once("abierta",_=>{console.log("La base de datos esta conectada")})

db.on("error",err =>{console.log(err)})

// creacion de datos
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));