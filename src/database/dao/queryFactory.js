const {
      sequelize
} = require('../../api/models')
const {
    Op,
    QueryTypes
} = require('sequelize');
const moment = require('moment')

const queryFactory = {

   findDateBirth: async (date) => {

    let month =  moment(date).format('M')
    let day =  moment(date).format('D')

        const response = await sequelize.query(`SELECT * FROM customers c
        WHERE
        month(c.date_birth) = '${month}'
        AND
        day(c.date_birth) = '${day}'`, {
            replacements: ['active'],
            type: QueryTypes.SELECT
        })
        return response
    },
    
}
module.exports = queryFactory
