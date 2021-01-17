const jwt = require('jsonwebtoken');
require('dotenv').config()
jwtSecret = process.env.JWT_PASS;
const authApi = {
    auth: async (req, res, next) => {
        const authToken = req.headers['authorization'];
        if (authToken != undefined) {
            const bearer = authToken.split(' ');
            const token = bearer[1];
            try {
                const user = await jwt.verify(token, jwtSecret)
                req.token = token;
                req.userLogged = user
               
                if (user.status == 1) {
                    next()
                } else {
                    res.status(401).json({
                        err: "User has no Adm status"
                    });
                }
                
            } catch (error) {
                res.status(401).json({
                    err: "Token invalid!"
                });
            }
        } else {
            res.status(401).json({
                err: "Token invalid!"
            });
        }
    }
}
module.exports = authApi