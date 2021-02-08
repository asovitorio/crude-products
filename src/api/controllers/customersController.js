const {
    Customers,
    sequelize
} = require('../models');
const CustomersObject = require('../../class/Customers')
const {
    Op
} = require('sequelize');
const customersController = {
  // ##### Controle de paginação de Clientes ###########
    // ##### Customers paging control ###########
    index: async (req,res) => {

        try {
            const {
                page = 1
            } = req.query
            const limit = 6;
            const offset = page < 1 ? 0 : (page - 1) * limit

            const {
                count: total,
                rows: customers
            } = await Customers.findAndCountAll({
                order:[[
                    'name','ASC'
                ]],
                offset: parseInt(offset),
                limit,
             
               
            })
            const totalPages = Math.ceil(total / limit)
          
            return res.status(200).json({
                customers,
                totalPages
            })
        } catch (error) {
            res.status(404).json({
                status: 404,
                msg: `${error}`
            })
        }

    },
    // ##### Controle de  Busca de clientes por Id ###########
    // ##### Customers Search Control by Id ###########
    showId: async (req,res) => {
        const {
            id
        } = req.params

        try {
            const customers = await Customers.findByPk(id);
            return res.status(200).json(customers);
        } catch (error) {
            return res.status(404).json({
                status: 404,
                msg: `${error}`
            });
        }
    },
    // ##### Controle de  Busca de clientes por parametros ###########
    // ##### Customers Search Control by Id ###########
    showParams: async (req,res) => {
        const fieldName = Object.keys(req.query)
        const queryValue = req.query[fieldName[0]]
        const page =req.query[fieldName[1]]
        
        const limit = 10;
        const offset = page < 1 ? 0 : (page - 1) * limit
        console.log(queryValue)
       
        const {
            count: total,
            rows: customers
        } = await Customers.findAndCountAll({
            order:[[
                'name','ASC'
            ]],
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
        const totalPages = Math.ceil(total / limit)
        return res.status(200).json({
            customers,
            totalPages
        })
    },
    // ########## Insere um clientes no Banco de dados ######## 
    // ########## Insert into data base Customers  ######## 

    create: async (req,res) => {
        try {
            const customers = new CustomersObject()
            const {
                name,
                date_birth,
                email,
                cellphone,
            } = req.body
           
            customers.setName(name)
            customers.setDateBirth(date_birth)
            customers.setEmail(email)
            customers.setCellphone('+55'+ cellphone)
            const resp = await Customers.create(customers.print())
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
     // ########## Atualiza um clientes no Banco de dados ######## 
    // ########## Update into data base Customers  ######## 
    update: async (req,res) => {
        try {
            const {
                id,
                name,
                date_birth,
                email,
                cellphone,
            } = req.body

            const resp = await Customers.findByPk(id)
            const customers = new CustomersObject()
            customers.setName(name === '' ? resp.name : name)
            customers.setDateBirth(date_birth === '' ? resp.date_birth : date_birth)
            customers.setEmail(email === '' ? resp.email : email)
            customers.setCellphone(cellphone === '' ? resp.cellphone : cellphone)
            const update = await Customers.update(customers.print() , {
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
    // ########## Exclui um clientes no Banco de dados ######## 
    // ########## delete into one tupla data base Customers  ######## 
    delete: async (req,res) => {
        try {
            const {
                id
            } = req.params
           
            const del = await Customers.destroy({
                where: {
                    id
                }
            })
            res.status(200).json(del)
            
        } catch (error) {
            res.status(401).json(del)
        }
    
    },
}

module.exports = customersController;



