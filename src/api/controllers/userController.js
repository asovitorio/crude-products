const {
    User,
    sequelize
} = require('../../api/models');
const {
    Op
} = require('sequelize');
const userController = {

    index: async (req, res) => {
        
        try {
          
            const {page=1} = req.query 
                const limit = 3;
                const offset = (page - 1) * limit
            console.log(offset)
            const {count:total,rows:users} = await User.findAndCountAll({
                offset:parseInt(offset),
                limit,
                attributes: {
                    exclude: ['password']
                },
            })
           
           const totalPages = Math.round(total/limit)
          
            return res.status(200).json({users,totalPages})
        } catch (error) {

            res.status(404).json({
                msg: error + "pagina não encontarda"
            })
        }
    },
    show: async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    },
    create: async (req, res) => {
        try {
            res.status(201).json(req.body)
        } catch (error) {
            res.status(401).json(error)

        }
    },
    update: async (req, res) => {},
    delete: async (req, res) => {},
}

module.exports = userController