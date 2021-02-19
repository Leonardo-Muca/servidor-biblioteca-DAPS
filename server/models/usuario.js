const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre:{
        type:String,
        required: [true,'El nombre es necesario']
    },
    email:{
        type:String,
        required: [true,'El correo es necesario'],
        unique: true
    },
    password:{
        type:String,
        required: [true,'La contraseña es necesaria']
    },
    img:{
        type:String,
        required:false
    },
    tipo:{
        type:String,
        default: 'USER_ROLE'
    },
    estado:{
        type: Boolean,
        default: true
    },
    correo: {
        type: Schema.Types.ObjectId,
        ref: 'Correos'
    },
    placas: {
        type:String
    },
    modelo:{
        type:String
    },
    celular:{
        type:Number
    },
    CURP: {
        type:String
    }
});

module.exports = mongoose.model('Usuario',usuarioSchema);