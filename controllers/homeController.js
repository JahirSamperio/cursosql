import Leccion from '../models/Leccion.js'
import jwt from 'jsonwebtoken';


const leccionesController = async (req, res) => {
    try {
        const {_token} = req.cookies;

        let tokenId;
        let autenticado;
        if(_token){
            autenticado=true;
            const token = jwt.verify(_token, process.env.JWT_SECRET);
            tokenId = token.id;
        } else {
            autenticado=false
        }

        const lecciones = await Leccion.findAll();
        
        res.render('index', {
            lecciones: lecciones,
            autenticado: autenticado,
            token: tokenId
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    leccionesController
}