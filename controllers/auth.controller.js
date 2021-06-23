const jwt = require('jsonwebtoken');
const authCtrl = {};

authCtrl.verifyToken = async (req, res, next) => {
    //las llamadas a la API debieran tener un header authorization
    if (!req.headers.authorization) {
        res.json({ 'status': '0', 'msg': 'Unauthorized request. not foun Authorization' })
    }
    //se espera formato -> Bearer XXX, interesa el token en pos(1) del arrayTexto
    var arrayTexto = req.headers.authorization.split(' ');
    var token = null;
    (arrayTexto.length >= 2) ? token = arrayTexto[1] : token = null;
    if (token == null) {
        res.json({ 'status': '0', 'msg': 'Unauthorized request. 1' });
    } else {
        try {
            const payload = jwt.verify(token, "secretkey");
            //payload retorna la información del user que se uso en el método de login
            req.id = payload.id;
            next(); //se pasa a procesar el siguiente método del stack de la peticion
        } catch (error) {
            res.json({ 'status': '0', 'msg': 'Unauthorized request. 2' });
        }
    }

}

//exportamos el manejador de token
module.exports = authCtrl;