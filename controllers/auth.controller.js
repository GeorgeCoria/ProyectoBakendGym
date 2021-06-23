const jwt = require('jsonwebtoken');
const authCtrl = {};

authCtrl.verifyToken = async (req, res, next) => {
    var bearerHeader = req.headers['authorization'];
    //las llamadas a la API debieran tener un header authorization
    if (typeof bearerHeader == 'undefined') {
        res.json({ 'status': '0', 'msg': 'Unauthorized request, headers undefined' })
    }
    //se espera formato -> Bearer XXX, interesa el token en pos(1) del arrayTexto
    else {
        var token = bearerHeader.split(" ")[1];
        try {
            const payload = jwt.verify(token, "secretkey");
            //payload retorna la información del user que se uso en el método de login
            req._id = payload.id;
            next(); //se pasa a procesar el siguiente método del stack de la peticion
        } catch (error) {
            res.json({ 'status': '0', 'msg': 'Unauthorized request.' });
        }
    }
}

//exportamos el manejador de token
module.exports = authCtrl;