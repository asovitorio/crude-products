const {
    User
} = require('../models')
const UserClass = require('../../class/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const jwtSecret = process.env.JWT_PASS

const authController = {
    auth: async (req, res) => {

        const userClass = new UserClass()
        const {
            email,
            password
        } = req.body
        userClass.setPassword(password)

        const user = await User.findOne({
            where: {
                email
            },
             attributes: ['id', 'name', 'email', 'avatar', 'password','status'],
        });

        // Check if a user exists only by email 
        if (!user) return res.send({
            msg: 'ueser or password error'
        })

        // Check that the password is correct
        const autentication = await userClass.compare(user.password);
        if (!autentication) return res.send({
            msg: 'ueser or password error'
        })

        try {
            const usuToken = {
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                status: user.status,
            }
            const token = await jwt.sign(usuToken, jwtSecret, {
                expiresIn: '48h'
            })
            return res.status(200).json(
               { token}
            );

        } catch (error) {
            return res.status(401).json({
                msg:`${error} or token invalid`
            });
        }
    }

}

module.exports = authController