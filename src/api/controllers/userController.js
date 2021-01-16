const {
    User,
    sequelize
} = require('../../api/models');
const UserObject = require('../../class/User')
const {
    Op
} = require('sequelize');
const userController = {
    // ##### Controle de paginação de Usuários ###########
    // ##### User paging control ###########
    index: async (req, res) => {
        try {
            const {
                page = 1
            } = req.query
            const limit = 3;
            const offset = page < 1 ? 0 : (page - 1) * limit

            const {
                count: total,
                rows: users
            } = await User.findAndCountAll({
                offset: parseInt(offset),
                limit,
                attributes: {
                    exclude: ['password']
                },
            })
            const totalPages = Math.round(total / limit)
            return res.status(200).json({
                users,
                totalPages
            })
        } catch (error) {
            res.status(404).json({
                status: 404,
                msg: `${error}`
            })
        }
    },
    // ##### Controle de  Busca de Usuário por Id ###########
    // ##### User Search Control by Id ###########
    showId: async (req, res) => {
        const {
            id
        } = req.params

        try {
            const user = await User.findByPk(id, {
                attributes: {
                    exclude: ['password']
                },
            });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(404).json({
                status: 404,
                msg: `${error}`
            });
        }
    },
    // ##### Controle de  Busca de Usuário por parametros ###########
    // ##### User Search Control by Id ###########
    showParams: async (req, res) => {
        const fieldName = Object.keys(req.query)
        const queryValue = req.query[fieldName[0]]
        const page =req.query[fieldName[1]]
        
        const limit = 3;
        const offset = page < 1 ? 0 : (page - 1) * limit
        console.log(queryValue)
       
        const {
            count: total,
            rows: users
        } = await User.findAndCountAll({
            offset: parseInt(offset),
            limit,
            where: {
                [fieldName[0]]: {
                    [Op.like]: `%${queryValue}%`
                }
            },
            attributes: {
                exclude: ['password']
            },
        })
        const totalPages = Math.round(total / limit)
        return res.status(200).json({
            users,
            totalPages
        })

        // try {
        //     const user = await User.findAll({
        //         where:{
        //             [fieldName]: {
        //                 [Op.like]:`%${queryValue}%`
        //             }
        //         },
        //             attributes: {
        //                 exclude: ['password']
        //             },
        //     });
        //      return res.status(200).json(user);
        // } catch (error) {
        //     return res.status(404).json({status:404,msg:`${error}`});
        // }
    },
    // ########## Insere um usuário no Banco de dados ######## 
    // ########## Insert into data base User  ######## 
    create: async (req, res) => {
        try {
            const user = new UserObject()
            const {
                name,
                email,
                password
            } = req.body
            user.setName(name)
            user.setEmail(email)
            user.setPassword(password)
            const resp = await User.create(user.print())
            res.status(201).json({
                id: resp.id,
                name: resp.name
            })
        } catch (error) {
            res.status(401).json({
                status: 404,
                msg: `${error}`
            })
        }
    },
    // ########## Atualiza um usuário no Banco de dados ######## 
    // ########## Update into data base User  ######## 
    update: async (req, res) => {
        try {
            const {
                id,
                name,
                email,
                avatar,
                password
            } = req.body
            const resp = await User.findByPk(id)
            const userInstace = new UserObject()
            userInstace.setName(name === '' ? resp.name : name)
            userInstace.setEmail(email === '' ? resp.email : email)
            userInstace.setAvatar(avatar === '' ? resp.avatar : avatar)
            userInstace.setPassword(password === '' ? resp.password : await userInstace.hash(password))

            const userCreate = {
                name: userInstace.getName(),
                email: userInstace.getEmail(),
                avatar: userInstace.getAvatar(),
                password: userInstace.getPassword(),
            }
            const update = await User.update(userCreate, {
                where: {
                    id
                }
            })
            res.status(200).json(update)

        } catch (error) {

            res.status(400).json({
                error,
                status: res.status(400)
            })
        }
    },
    delete: async (req, res) => {
        const {
            id
        } = req.body
        const del = await User.destroy({
            where: {
                id
            }
        })
        res.status(200).json(del)

    },
}

module.exports = userController